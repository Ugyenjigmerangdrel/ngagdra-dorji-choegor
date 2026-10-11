import { notFound } from "next/navigation";
import { PendingList, Teaser, TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { articles, getArticle, storiesIntro } from "@/lib/stories";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? pageMetadata(article.title, `${article.dek} ${article.intro}`, `/stories/${slug}`) : {};
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

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
          image={{ ...article.image, priority: true, sizes: "(max-width: 1280px) calc(100vw - 40px), 1280px", aspect: "21 / 9" }}
          imageLayout="wide"
        />
        <div className="section">
          <div className="reading prose story">
            <p className="reading__intro">{article.intro}</p>
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((block, index) => {
                  if (typeof block === "string") return <p key={index}>{block}</p>;
                  if ("quote" in block) return <blockquote className="pull-quote" key={index}><p>{block.quote}</p></blockquote>;
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

      <nav className="container pager-wrap story-end" aria-label="Stories">
        <p className="story-end__title">{storiesIntro.title}</p>
        <p className="eyebrow">{storiesIntro.kicker}</p>
        <TextLink href="/stories">Back to Stories</TextLink>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }} />
    </>
  );
}
