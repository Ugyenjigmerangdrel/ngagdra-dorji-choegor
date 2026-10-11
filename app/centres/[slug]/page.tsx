import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryBlocks, TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { centres, districtId, getCentre } from "@/lib/centres";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return centres.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const centre = getCentre(slug);
  return centre ? pageMetadata(centre.name, centre.summary[0], `/centres/${slug}`) : {};
}

export default async function CentrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const centre = getCentre(slug);
  if (!centre) notFound();

  const index = centres.findIndex((item) => item.slug === slug);
  const previous = centres[index - 1];
  const next = centres[index + 1];
  const place = {
    "@context": "https://schema.org",
    "@type": centre.hub ? ["EducationalOrganization", "Place"] : "Place",
    name: centre.name,
    description: centre.summary[0],
    url: `${site.url}/centres/${centre.slug}`,
    address: { "@type": "PostalAddress", addressRegion: centre.district, addressCountry: "BT" },
    ...(centre.hub ? { "@id": `${site.url}/#organization` } : { containedInPlace: { "@type": "AdministrativeArea", name: `${centre.district}, Bhutan` } }),
  };

  return (
    <>
      <PageHeader
        title={centre.name}
        lead={centre.story.dek}
        dek
        crumbs={[{ name: "Centres", path: "/centres" }, { name: centre.name, path: `/centres/${centre.slug}` }]}
        image={centre.image ? { ...centre.image, priority: true, sizes: "(max-width: 860px) calc(100vw - 40px), 36vw" } : undefined}
      />

      <section className="section">
        <div className="container rail">
          <aside className="rail__head" aria-label="In brief">
            <h2 className="brief__title">In brief</h2>
            <dl className="facts facts--compact">
              <div><dt>Type</dt><dd>{centre.type}</dd></div>
              <div><dt>Location</dt><dd>{centre.place}</dd></div>
              <div><dt>Dzongkhag</dt><dd>{centre.district}</dd></div>
            </dl>
            <div className="brief">
              {centre.summary.map((text) => <p key={text}>{text}</p>)}
            </div>
            <TextLink href={`/centres#${districtId(centre.district)}`} className="text-link--small">More in {centre.district}</TextLink>
          </aside>
          <article className="rail__body prose story" aria-label={centre.story.title}>
            {centre.story.sections.map((section, sectionIndex) => (
              <section key={section.heading ?? sectionIndex}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                <StoryBlocks blocks={section.body} />
              </section>
            ))}
          </article>
        </div>
      </section>

      <nav className="container pager-wrap" aria-label="More centres">
        <div className="pager">
          {previous ? <Link href={`/centres/${previous.slug}`}><span>Previous centre</span><strong>{previous.name}</strong></Link> : <Link href="/centres"><span>Back to</span><strong>All centres</strong></Link>}
          {next ? <Link href={`/centres/${next.slug}`}><span>Next centre</span><strong>{next.name}</strong></Link> : <Link href="/centres"><span>Back to</span><strong>All centres</strong></Link>}
        </div>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(place) }} />
    </>
  );
}
