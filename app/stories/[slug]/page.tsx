import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialImage } from "@/components/EditorialImage";
import { stories } from "@/lib/content";
import { pageMetadata, jsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() { return stories.map((story) => ({ slug: story.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const story = stories.find((item) => item.slug === slug); return story ? pageMetadata(story.title, story.dek, `/stories/${slug}`) : {}; }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();
  const article = { "@context": "https://schema.org", "@type": "Article", headline: story.title, description: story.dek, image: `${site.url}${story.image.src}`, author: { "@id": `${site.url}/#organization` }, publisher: { "@id": `${site.url}/#organization` }, mainEntityOfPage: `${site.url}/stories/${story.slug}`, inLanguage: "en" };
  const bc = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Stories", path: "/stories" }, { name: story.title, path: `/stories/${story.slug}` }]);
  return (
    <>
      <article className="article-page">
        <header className="article-header container"><p className="eyebrow">{story.category} · {story.readTime}</p><h1>{story.title}</h1><p className="lead">{story.dek}</p><div className="article-meta">Based on {story.source.publication}, pages {story.source.pages.join(", ")}</div></header>
        <EditorialImage {...story.image} priority sizes="(max-width: 680px) 100vw, (max-width: 1440px) calc(100vw - 48px), 1440px" aspect="3 / 2" className="article-hero-image" />
        <div className="reading-column"><p className="article-intro">{story.intro}</p>{story.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}<Link className="text-link" href="/stories">← All stories</Link></div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(bc) }} />
    </>
  );
}
