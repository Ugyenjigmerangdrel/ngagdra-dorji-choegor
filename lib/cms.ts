import "server-only";
import { getSupabase, publicObjectUrl } from "@/lib/supabase";

// Stories, events and announcements published from the committee studio.
// Every reader answers with "nothing" when the database is not configured or
// cannot be reached, so the pages built from the content documents never break.

export type CmsKind = "story" | "event" | "announcement";

export type CmsItem = {
  kind: CmsKind;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover: { src: string; width: number | null; height: number | null } | null;
  /** HTML produced by the studio's allow-listed renderer. */
  html: string;
  readingMinutes: number;
  eventStart: string | null;
  eventEnd: string | null;
  location: string;
  pinned: boolean;
  expiresOn: string | null;
  publishedAt: string;
  updatedAt: string;
};

type Row = {
  kind: CmsKind; slug: string; title: string; excerpt: string; category: string;
  cover_path: string | null; cover_width: number | null; cover_height: number | null;
  content_html: string; reading_minutes: number;
  event_start: string | null; event_end: string | null; location: string;
  pinned: boolean; expires_on: string | null; published_at: string; updated_at: string;
};

const COLUMNS =
  "kind, slug, title, excerpt, category, cover_path, cover_width, cover_height, content_html, reading_minutes, event_start, event_end, location, pinned, expires_on, published_at, updated_at";

function toItem(row: Row): CmsItem {
  const src = row.cover_path ? publicObjectUrl("content-public", row.cover_path) : null;
  return {
    kind: row.kind,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    cover: src ? { src, width: row.cover_width, height: row.cover_height } : null,
    html: row.content_html,
    readingMinutes: row.reading_minutes,
    eventStart: row.event_start,
    eventEnd: row.event_end,
    location: row.location,
    pinned: row.pinned,
    expiresOn: row.expires_on,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
  };
}

/** Today in Bhutan, as YYYY-MM-DD. */
export function todayInBhutan(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Thimphu" }).format(now);
}

export async function getPublished(kind: CmsKind): Promise<CmsItem[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("published_content")
      .select(COLUMNS)
      .eq("kind", kind)
      .order("published_at", { ascending: false })
      .limit(200);
    if (error || !data) return [];
    return (data as Row[]).map(toItem);
  } catch {
    return [];
  }
}

export async function getPublishedItem(kind: CmsKind, slug: string): Promise<CmsItem | null> {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) return null;
  const supabase = getSupabase();
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from("published_content").select(COLUMNS).eq("kind", kind).eq("slug", slug).maybeSingle();
    if (error || !data) return null;
    return toItem(data as Row);
  } catch {
    return null;
  }
}

/** Current announcements: pinned first, then newest; expired ones are left out. */
export async function getAnnouncements(): Promise<CmsItem[]> {
  const today = todayInBhutan();
  const items = (await getPublished("announcement")).filter((item) => !item.expiresOn || item.expiresOn >= today);
  return items.sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.publishedAt.localeCompare(a.publishedAt));
}

export type SiteSettings = {
  bankName: string; accountName: string; accountNumber: string; donationNote: string;
  contactPhone: string; contactEmail: string; telegramUrl: string;
};

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("bank_name, account_name, account_number, donation_note, contact_phone, contact_email, telegram_url")
      .maybeSingle();
    if (error || !data) return null;
    return {
      bankName: data.bank_name, accountName: data.account_name, accountNumber: data.account_number, donationNote: data.donation_note,
      contactPhone: data.contact_phone, contactEmail: data.contact_email, telegramUrl: data.telegram_url,
    };
  } catch {
    return null;
  }
}

const day = (iso: string) => new Date(`${iso.slice(0, 10)}T00:00:00Z`);
const fmt = (date: Date, options: Intl.DateTimeFormatOptions) => date.toLocaleDateString("en-GB", { timeZone: "UTC", ...options });

/** "26 March 2026", "14–25 August 2026" or "30 August – 2 September 2026". */
export function dateLabel(start: string, end?: string | null): string {
  const a = day(start);
  if (!end || end.slice(0, 10) === start.slice(0, 10)) return fmt(a, { day: "numeric", month: "long", year: "numeric" });
  const b = day(end);
  if (a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth()) {
    return `${a.getUTCDate()}–${fmt(b, { day: "numeric", month: "long", year: "numeric" })}`;
  }
  if (a.getUTCFullYear() === b.getUTCFullYear()) {
    return `${fmt(a, { day: "numeric", month: "long" })} – ${fmt(b, { day: "numeric", month: "long", year: "numeric" })}`;
  }
  return `${fmt(a, { day: "numeric", month: "long", year: "numeric" })} – ${fmt(b, { day: "numeric", month: "long", year: "numeric" })}`;
}

/** Date a timestamp falls on in Bhutan, as YYYY-MM-DD. */
export function bhutanDate(timestamp: string): string {
  return todayInBhutan(new Date(timestamp));
}

// Bridges to the records the existing pages already render -----------------------------------

import type { EventRecord } from "@/lib/events";
import { allEvents } from "@/lib/events";
import { articles, storyCategories, type LatestStory, type StoryCategory } from "@/lib/stories";

/** A studio event in the shape of the site's own event records. */
export function toEventRecord(item: CmsItem): EventRecord {
  const date = item.eventStart ?? bhutanDate(item.publishedAt);
  return {
    slug: item.slug,
    date,
    endDate: item.eventEnd ?? undefined,
    dateLabel: dateLabel(date, item.eventEnd),
    label: item.category || item.location || "Event",
    location: item.location || undefined,
    title: item.title,
    summary: item.excerpt ? [item.excerpt] : [],
    entries: [],
  };
}

/** Studio events, newest first. An event from the content documents keeps its address if a studio event reuses it. */
export async function getCmsEvents(): Promise<{ item: CmsItem; record: EventRecord }[]> {
  const taken = new Set(allEvents.map((event) => event.slug));
  return (await getPublished("event"))
    .filter((item) => !taken.has(item.slug))
    .map((item) => ({ item, record: toEventRecord(item) }))
    .sort((a, b) => b.record.date.localeCompare(a.record.date));
}

function storyCategory(label: string): StoryCategory {
  const match = storyCategories.find((category) => category.label.toLowerCase() === label.trim().toLowerCase());
  return match ? match.label : "News";
}

/** Studio stories as entries for the "Latest stories" index. */
export async function getCmsStories(): Promise<{ item: CmsItem; story: LatestStory }[]> {
  const taken = new Set(articles.map((article) => article.slug));
  return (await getPublished("story"))
    .filter((item) => !taken.has(item.slug))
    .map((item) => ({
      item,
      story: {
        title: item.title,
        category: storyCategory(item.category),
        year: bhutanDate(item.publishedAt).slice(0, 4),
        text: item.excerpt,
        href: `/stories/${item.slug}`,
        image: item.cover ? { src: item.cover.src, alt: "" } : undefined,
      },
    }));
}
