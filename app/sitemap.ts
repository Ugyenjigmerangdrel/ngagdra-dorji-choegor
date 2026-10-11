import type { MetadataRoute } from "next";
import { centres } from "@/lib/centres";
import { allEvents } from "@/lib/events";
import { site } from "@/lib/site";
import { articles } from "@/lib/stories";

export default function sitemap(): MetadataRoute.Sitemap {
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
    ...centres.map((centre) => `/centres/${centre.slug}`),
    ...allEvents.map((event) => `/events/${event.slug}`),
    ...articles.map((article) => `/stories/${article.slug}`),
  ];
  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: path.startsWith("/events") || path.startsWith("/stories") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
