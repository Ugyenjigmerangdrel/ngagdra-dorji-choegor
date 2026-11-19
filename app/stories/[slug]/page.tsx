import Image from "next/image";
import { notFound } from "next/navigation";
import { Closer } from "@/components/Closer";
import { EditorialImage } from "@/components/EditorialImage";
import { PendingList, Teaser, TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { bhutanDate, getPublishedItem, type CmsItem } from "@/lib/cms";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { articles, getArticle, storiesIntro } from "@/lib/stories";

// Re-rendered every minute so stories published from the studio appear without a redeploy.
export const revalidate = 60;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (article) return pageMetadata(article.title, `${article.dek} ${article.intro}`, `/stories/${slug}`);
  const item = await getPublishedItem("story", slug);
  return item ? pageMetadata(item.title, item.excerpt || item.title, `/stories/${slug}`) : {};
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    // Not one of the stories from the content documents: look for one published from the studio.
    const item = await getPublishedItem("story", slug);
    if (!item) notFound();
    return <StudioStory item={item} />;
  }

  // The closer leads to the next story, or back to the index while this is the only one.
  const next = articles.length > 1 ? articles[(articles.indexOf(article) + 1) % articles.length] : null;
  const closer = next
    ? { href: `/stories/${next.slug}`, label: "Next story", title: next.title, cta: "Read the story", image: next.image }
    : { href: "/stories", label: storiesIntro.kicker, title: storiesIntro.title, cta: "Back to stories", image: { src: "/media/community/public-blessing-wide.jpg", objectPosition: "50% 40%" } };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.published,
    image: `${site.url}${article.image.src}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/stories/${article.slug}`,
    inLanguage: "en",
  };

  return (
    <>
      <article>
        <PageHeader
          eyebrow={article.meta}
          title={article.title}
          lead={article.dek}
          dek
          crumbs={[{ name: "Stories", path: "/stories" }, { name: article.title, path: `/stories/${article.slug}` }]}
          cover={{ src: article.image.src, objectPosition: article.image.objectPosition, caption: article.image.caption }}
        />
        <div className="section">
          <div className="reading prose story">
            <p className="reading__intro">{article.intro}</p>
            {article.sections.map((section) => (
              <section key={section.heading}>
                {section.ornament ? (
                  <div className="story__ornament" aria-hidden="true">
                    <Image src="/logo.svg" alt="" width={671} height={787} unoptimized />
                  </div>
                ) : null}
                <h2>{section.heading}</h2>
                {section.body.map((block, index) => {
                  if (typeof block === "string") return <p key={index}>{block}</p>;
                  if ("quote" in block) return <blockquote className="pull-quote" key={index}><p>{block.quote}</p></blockquote>;
                  if ("figure" in block) return <EditorialImage key={index} {...block.figure} aspect="16 / 9" sizes="(max-width: 1056px) calc(100vw - 40px), 960px" className="story__figure" />;
                  if ("pair" in block) {
                    return (
                      <div className="story__figure story__pair" key={index}>
                        {block.pair.map((image) => <EditorialImage key={image.src} {...image} aspect="4 / 5" sizes="(max-width: 1056px) 95vw, 900px" />)}
                      </div>
                    );
                  }
                  return <TextLink key={index} href={block.link.href}>{block.link.label}</TextLink>;
                })}
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="section section--band" aria-labelledby="related-title">
        <div className="container">
          <div className="section-head section-head--wide">
            <h2 id="related-title">Related stories</h2>
          </div>
          <div className="related">
            <Teaser meta="Related centre" title={article.relatedCentre.name} text={article.relatedCentre.text} href={`/centres/${article.relatedCentre.slug}`} cta="Explore centre" />
            <PendingList items={article.related} />
          </div>
        </div>
      </section>

      <Closer ariaLabel="Stories" {...closer} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }} />
    </>
  );
}

/** A story written and published in the committee studio. */
function StudioStory({ item }: { item: CmsItem }) {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    ...(item.excerpt ? { description: item.excerpt } : {}),
    datePublished: bhutanDate(item.publishedAt),
    dateModified: bhutanDate(item.updatedAt),
    ...(item.cover ? { image: item.cover.src } : {}),
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/stories/${item.slug}`,
    inLanguage: "en",
  };
  return (
    <>
      <article>
        <PageHeader
          eyebrow={[item.category, `${item.readingMinutes} min read`].filter(Boolean).join(" · ")}
          title={item.title}
          lead={item.excerpt || undefined}
          dek
          crumbs={[{ name: "Stories", path: "/stories" }, { name: item.title, path: `/stories/${item.slug}` }]}
          cover={item.cover ? { src: item.cover.src } : undefined}
        />
        <div className="section">
          <div className="reading prose story cms-body" dangerouslySetInnerHTML={{ __html: item.html }} />
        </div>
      </article>
      <Closer ariaLabel="Stories" href="/stories" label={storiesIntro.kicker} title={storiesIntro.title} cta="Back to stories" image={{ src: "/media/community/public-blessing-wide.jpg", objectPosition: "50% 40%" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }} />
    </>
  );
}
