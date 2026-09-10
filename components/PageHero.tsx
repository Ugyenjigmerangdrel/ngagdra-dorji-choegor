import type { EditorialImageProps } from "@/components/EditorialImage";
import { InstitutionalHero } from "@/components/InstitutionalLayout";
import { breadcrumbJsonLd, jsonLd } from "@/lib/seo";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: EditorialImageProps;
  path?: string;
  parent?: { name: string; path: string };
  variant?: "default" | "archive" | "work" | "place";
};

export function PageHero({ eyebrow, title, intro, image, path, parent, variant = "default" }: PageHeroProps) {
  const pagePaths: Record<string, string> = {
    "About the Institute": "/about",
    "Founder and Spiritual Teacher": "/about/rinpoche",
    "Lineage & History": "/about/history",
    Heritage: "/about/heritage",
    Milestones: "/about/milestones",
    "Our Work": "/our-work",
    Centres: "/centres",
    Events: "/events",
    Stories: "/stories",
    Visit: "/visit",
    Support: "/support",
  };
  const resolvedPath = path ?? pagePaths[eyebrow];
  const resolvedParent = parent ?? (eyebrow === "Founder and Spiritual Teacher" || eyebrow === "Lineage & History" || eyebrow === "Heritage" || eyebrow === "Milestones" ? { name: "About", path: "/about" } : undefined);
  const breadcrumbs = resolvedPath ? breadcrumbJsonLd([
    { name: "Home", path: "/" },
    ...(resolvedParent ? [resolvedParent] : []),
    { name: title, path: resolvedPath },
  ]) : null;
  return (
    <>
      <div className={`page-hero page-hero--${variant}`}>
        <InstitutionalHero eyebrow={eyebrow} title={title} intro={intro} image={image} />
      </div>
      {breadcrumbs ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} /> : null}
    </>
  );
}
