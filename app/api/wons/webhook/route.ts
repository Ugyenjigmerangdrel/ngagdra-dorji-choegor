import { settleCheckout, verifyWebhookSignature, wonsEnabled } from "@/lib/wons";

export const dynamic = "force-dynamic";

const json = (body: unknown, status: number) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

/**
 * WONS calls this when a checkout completes. The delivery is only a prompt: after its signature
 * is checked, the checkout is read back from WONS and the donation is confirmed from that answer.
 * Confirming twice is harmless, so repeated deliveries need no bookkeeping here.
 */
export async function POST(request: Request) {
  if (!wonsEnabled() || !process.env.WONS_WEBHOOK_SECRET) return json({ error: "not_configured" }, 503);
  const raw = await request.text();
  if (!verifyWebhookSignature(raw, request.headers.get("x-wons-signature-v2"), process.env.WONS_WEBHOOK_SECRET)) {
    return json({ error: "bad_signature" }, 401);
  }

  let event: { type?: unknown; event?: unknown; data?: { session?: { id?: unknown } } };
  try {
    event = JSON.parse(raw);
  } catch {
    return json({ error: "bad_body" }, 400);
  }
  const type = typeof event.type === "string" ? event.type : typeof event.event === "string" ? event.event : "";
  const sessionId = event.data?.session?.id;
  if (type !== "checkout.completed" || typeof sessionId !== "string") return json({ received: true, handled: false }, 200);

  const result = await settleCheckout(sessionId);
  // An error here is worth a retry from WONS; anything else is a final answer.
  if (result.state === "error") return json({ error: "not_settled" }, 500);
  return json({ received: true, handled: result.state === "paid" }, 200);
}
