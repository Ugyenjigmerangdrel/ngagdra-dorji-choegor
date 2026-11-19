import type { MetadataRoute } from "next";
import { centres } from "@/lib/centres";
import { getCmsEvents, getCmsStories } from "@/lib/cms";
import { allEvents } from "@/lib/events";
import { site } from "@/lib/site";
import { articles } from "@/lib/stories";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cmsEvents, cmsStories] = await Promise.all([getCmsEvents(), getCmsStories()]);
  const paths = [
    "",
    "/about",
    "/about/rinpoche",
    "/about/history",
    "/about/heritage",
    "/about/milestones",
    "/our-work",
    "/centres",
    "/events",
    "/stories",
    "/visit",
    "/support",
    "/donate",
    "/membership",
    "/announcements",
    ...centres.map((centre) => `/centres/${centre.slug}`),
    ...allEvents.map((event) => `/events/${event.slug}`),
    ...articles.map((article) => `/stories/${article.slug}`),
    ...cmsEvents.map(({ record }) => `/events/${record.slug}`),
    ...cmsStories.map(({ item }) => `/stories/${item.slug}`),
  ];
  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: path.startsWith("/events") || path.startsWith("/stories") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
