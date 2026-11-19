// A local stand-in for the WONS Merchant API, for developing and testing online donations
// without a merchant account. It implements the three checkout endpoints as described by
// https://merchant.wons.bt/docs/api/openapi.json (version 1), nothing more.
//
//   node scripts/wons-mock.mjs [port]            # default 3299
//   WONS_API_BASE=http://127.0.0.1:3299/api/v1  WONS_API_KEY=wtest_local
//
// Test-only helpers (not part of the real API):
//   POST /__pay/<session id>      mark a checkout paid
//   POST /__expire/<session id>   mark a checkout expired
import { createServer } from "node:http";
import { randomBytes } from "node:crypto";

const port = Number(process.argv[2] || 3299);
const KEY = process.env.WONS_MOCK_KEY || "wtest_local";
const sessions = new Map();
const idempotency = new Map();

const send = (res, status, body) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
};
const fail = (res, status, error, message) => send(res, status, { error, message, docUrl: "https://merchant.wons.bt/docs/api" });
const readBody = (req) => new Promise((resolve) => { let data = ""; req.on("data", (chunk) => (data += chunk)); req.on("end", () => resolve(data)); });

createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${port}`);
  const path = url.pathname;

  const helper = path.match(/^\/__(pay|expire)\/(.+)$/);
  if (helper && req.method === "POST") {
    const session = sessions.get(helper[2]);
    if (!session) return fail(res, 404, "not_found", "No such checkout.");
    if (helper[1] === "pay") Object.assign(session, { paid: true, status: "complete", invoice: { id: "inv_mock", number: "INV-0001", status: "paid", amountPaidMinor: session.amountMinor, amountDueMinor: 0 } });
    else Object.assign(session, { status: "expired" });
    return send(res, 200, { session });
  }

  if (!path.startsWith("/api/v1/")) return fail(res, 404, "not_found", "Unknown path.");
  const auth = req.headers.authorization === `Bearer ${KEY}` || req.headers["x-api-key"] === KEY;
  if (!auth) return fail(res, 401, "unauthorized", "No key, or the key is wrong, revoked or expired.");

  if (path === "/api/v1/checkout/sessions" && req.method === "POST") {
    const raw = await readBody(req);
    const key = req.headers["idempotency-key"];
    if (key && idempotency.has(key)) {
      const first = idempotency.get(key);
      return first.raw === raw ? send(res, 201, { session: first.session }) : fail(res, 409, "idempotency_conflict", "The same Idempotency-Key was used with a different body.");
    }
    let input;
    try { input = JSON.parse(raw); } catch { return fail(res, 422, "invalid_body", "The body is not JSON."); }
    if (!Number.isInteger(input.amountMinor) || input.amountMinor <= 0) return fail(res, 422, "invalid_amount", "amountMinor must be a whole number of minor units above zero.");
    if (typeof input.reference === "string" && input.reference.length > 120) return fail(res, 422, "invalid_reference", "reference is longer than 120 characters.");
    const id = `cs_test_${randomBytes(8).toString("hex")}`;
    const session = {
      id, status: "open", url: `http://127.0.0.1:${port}/c/${id}`,
      amountMinor: input.amountMinor, currency: "BTN", amountText: `Nu ${(input.amountMinor / 100).toFixed(2)}`,
      description: input.description ?? "", reference: input.reference ?? "", metadata: input.metadata ?? {},
      customerName: input.customerName ?? "", customerEmail: input.customerEmail ?? "",
      successUrl: input.successUrl ?? "", cancelUrl: input.cancelUrl ?? "",
      expiresAt: new Date(Date.now() + 7 * 60 * 1000).toISOString(), livemode: false, created: new Date().toISOString(),
      paid: false, invoice: null,
    };
    sessions.set(id, session);
    if (key) idempotency.set(key, { raw, session });
    return send(res, 201, { session });
  }
  if (path === "/api/v1/checkout/sessions" && req.method === "GET") {
    const all = [...sessions.values()].reverse();
    return send(res, 200, { page: 1, perPage: 25, total: all.length, sessions: all.slice(0, 25) });
  }
  const one = path.match(/^\/api\/v1\/checkout\/sessions\/([^/]+)$/);
  if (one && req.method === "GET") {
    const session = sessions.get(decodeURIComponent(one[1]));
    return session ? send(res, 200, { session }) : fail(res, 404, "not_found", "No such record for this key.");
  }
  return fail(res, 404, "not_found", "Unknown path.");
}).listen(port, "127.0.0.1", () => console.log(`WONS mock listening on http://127.0.0.1:${port}/api/v1 (key ${KEY})`));
