import { createHash, timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

const json = (body: unknown, status: number) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const digest = (value: string) => createHash("sha256").update(value).digest();

const LISTS = { story: "/stories", event: "/events", announcement: "/announcements" } as const;

/**
 * Called by the committee studio right after something is published or withdrawn, so the
 * website shows it at once instead of on its next timed refresh.
 *
 *   POST /api/revalidate      Authorization: Bearer <REVALIDATE_SECRET>
 *   { "kind": "story" | "event" | "announcement", "slugs": ["…"] }
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET?.trim();
  if (!secret) return json({ error: "not_configured" }, 503);
  const given = request.headers.get("authorization")?.match(/^Bearer (.+)$/)?.[1] ?? "";
  if (!timingSafeEqual(digest(given), digest(secret))) return json({ error: "unauthorized" }, 401);

  const body = (await request.json().catch(() => null)) as { kind?: unknown; slugs?: unknown } | null;
  const kind = body?.kind;
  if (kind !== "story" && kind !== "event" && kind !== "announcement") return json({ error: "invalid_kind" }, 400);
  const slugs = Array.isArray(body?.slugs)
    ? body.slugs.filter((slug): slug is string => typeof slug === "string" && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)).slice(0, 50)
    : [];

  const paths = ["/", LISTS[kind], "/sitemap.xml", ...(kind === "announcement" ? [] : slugs.map((slug) => `${LISTS[kind]}/${slug}`))];
  for (const path of paths) revalidatePath(path);
  return json({ revalidated: paths }, 200);
}
