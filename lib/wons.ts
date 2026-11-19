import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

// WONS Merchant (https://merchant.wons.bt/docs/api) — online card payment for donations.
// Field names follow the published OpenAPI document (version 1). Online payment is offered
// only when both WONS_API_KEY and WONS_SERVER_TOKEN are set.

export type WonsSession = {
  id: string;
  status: "open" | "complete" | "expired" | "cancelled";
  url: string;
  amountMinor: number;
  currency: string;
  reference: string;
  metadata: Record<string, unknown>;
  paid: boolean;
  livemode: boolean;
  expiresAt: string;
};

export function wonsConfig(): { apiKey: string; apiBase: string; serverToken: string } | null {
  const apiKey = process.env.WONS_API_KEY?.trim();
  const serverToken = process.env.WONS_SERVER_TOKEN?.trim();
  if (!apiKey || !serverToken) return null;
  const apiBase = (process.env.WONS_API_BASE?.trim() || "https://merchant.wons.bt/api/v1").replace(/\/+$/, "");
  return { apiKey, apiBase, serverToken };
}

export const wonsEnabled = () => wonsConfig() !== null;

async function call(path: string, init: RequestInit & { idempotencyKey?: string } = {}): Promise<WonsSession> {
  const config = wonsConfig();
  if (!config) throw new Error("wons_not_configured");
  const { idempotencyKey, ...rest } = init;
  const response = await fetch(`${config.apiBase}${path}`, {
    ...rest,
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      Accept: "application/json",
      ...(rest.body ? { "Content-Type": "application/json" } : {}),
      ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
    },
  });
  const body = (await response.json().catch(() => null)) as { session?: WonsSession; error?: string } | null;
  if (!response.ok || !body?.session?.id) throw new Error(`wons_${body?.error ?? response.status}`);
  return body.session;
}

export function createCheckoutSession(input: {
  /** Whole ngultrum. Sent to WONS in minor units (chhetrum). */
  amount: number;
  reference: string;
  description: string;
  customerName?: string;
  customerEmail?: string;
  successUrl: string;
  cancelUrl: string;
  metadata: Record<string, string>;
  idempotencyKey: string;
}): Promise<WonsSession> {
  return call("/checkout/sessions", {
    method: "POST",
    idempotencyKey: input.idempotencyKey,
    body: JSON.stringify({
      amountMinor: input.amount * 100,
      reference: input.reference,
      description: input.description.slice(0, 200),
      ...(input.customerName ? { customerName: input.customerName } : {}),
      ...(input.customerEmail ? { customerEmail: input.customerEmail } : {}),
      successUrl: input.successUrl,
      cancelUrl: input.cancelUrl,
      metadata: input.metadata,
    }),
  });
}

/** Reading the checkout back is the only proof of payment (`paid`). */
export function getCheckoutSession(id: string): Promise<WonsSession> {
  return call(`/checkout/sessions/${encodeURIComponent(id)}`);
}

const safeEqual = (a: string, b: string) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

/**
 * Checks `X-Wons-Signature-V2: t=<unix seconds>,v1=<hex>`: HMAC-SHA256 over `t`, a dot and the
 * raw request body, keyed on the endpoint's signing secret. Parsed strictly, as WONS documents.
 */
export function verifyWebhookSignature(rawBody: string, header: string | null, secret: string | undefined, now = Date.now(), toleranceSeconds = 300): boolean {
  if (!header || !secret) return false;
  const fields: Record<string, string> = {};
  for (const part of header.split(",")) {
    const at = part.indexOf("=");
    if (at < 1) return false;
    const name = part.slice(0, at);
    if (name in fields || (name !== "t" && name !== "v1")) return false;
    fields[name] = part.slice(at + 1);
  }
  const { t = "", v1 = "" } = fields;
  if (!/^[0-9]{1,12}$/.test(t) || !/^[0-9a-f]{64}$/.test(v1)) return false;
  if (Math.abs(now / 1000 - Number(t)) > toleranceSeconds) return false;
  const expected = createHmac("sha256", secret).update(`${t}.`).update(rawBody).digest("hex");
  return safeEqual(expected, v1);
}

// The checkout a donor was sent to, remembered in a signed, HttpOnly cookie so the return page
// can read it back from WONS. (The API has no lookup by reference, and the website cannot read
// donations from the database.)

export const CHECKOUT_COOKIE = "ndc_checkout";
export const CHECKOUT_COOKIE_SECONDS = 60 * 60;

const sign = (value: string, key: string) => createHmac("sha256", key).update(`checkout:${value}`).digest("hex");

export function sealCheckout(donationId: string, sessionId: string, now = Date.now()): string | null {
  const config = wonsConfig();
  if (!config) return null;
  const value = `${donationId}.${Buffer.from(sessionId).toString("base64url")}.${Math.floor(now / 1000) + CHECKOUT_COOKIE_SECONDS}`;
  return `${value}.${sign(value, config.serverToken)}`;
}

export function openCheckout(cookie: string | undefined, now = Date.now()): { donationId: string; sessionId: string } | null {
  const config = wonsConfig();
  if (!config || !cookie) return null;
  const at = cookie.lastIndexOf(".");
  if (at < 0) return null;
  const value = cookie.slice(0, at);
  if (!safeEqual(sign(value, config.serverToken), cookie.slice(at + 1))) return null;
  const [donationId, session, expires] = value.split(".");
  if (!donationId || !session || !(Number(expires) > now / 1000)) return null;
  return { donationId, sessionId: Buffer.from(session, "base64url").toString() };
}

/**
 * Confirms a donation from what WONS itself reports. Returns the donation once it is paid,
 * "open" while the donor has not paid yet, and "closed" when the checkout expired or was cancelled.
 */
export async function settleCheckout(sessionId: string): Promise<{ state: "paid"; donationCode: string; amount: number } | { state: "open" | "closed" | "error" }> {
  const config = wonsConfig();
  if (!config) return { state: "error" };
  try {
    const session = await getCheckoutSession(sessionId);
    if (!session.paid) return { state: session.status === "open" ? "open" : "closed" };
    if (!Number.isInteger(session.amountMinor) || session.amountMinor % 100 !== 0) return { state: "error" };
    const { getSupabase } = await import("@/lib/supabase");
    const supabase = getSupabase();
    if (!supabase) return { state: "error" };
    const { data, error } = await supabase.rpc("wons_mark_paid", {
      p_token: config.serverToken,
      p_session_id: session.id,
      p_amount: session.amountMinor / 100,
    });
    if (error || !data) return { state: "error" };
    const result = data as { donation_code: string; amount: number };
    return { state: "paid", donationCode: result.donation_code, amount: result.amount };
  } catch {
    return { state: "error" };
  }
}
