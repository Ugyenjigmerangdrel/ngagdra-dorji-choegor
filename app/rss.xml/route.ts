import { allEvents } from "@/lib/events";
import { site } from "@/lib/site";
import { articles } from "@/lib/stories";

const item = (title: string, path: string, description: string, date: string) =>
  `<item><title><![CDATA[${title}]]></title><link>${site.url}${path}</link><guid>${site.url}${path}</guid><pubDate>${new Date(`${date}T00:00:00Z`).toUTCString()}</pubDate><description><![CDATA[${description}]]></description></item>`;

export async function GET() {
  const items = [
    ...articles.map((article) => ({ title: article.title, path: `/stories/${article.slug}`, description: article.dek, date: article.published })),
    ...allEvents.map((event) => ({ title: event.title, path: `/events/${event.slug}`, description: event.summary[0], date: event.date })),
  ]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((entry) => item(entry.title, entry.path, entry.description, entry.date))
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name}: Stories and Events</title><link>${site.url}/stories</link><description>${site.description}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
