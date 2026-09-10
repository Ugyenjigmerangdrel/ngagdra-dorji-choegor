import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { centres, getCentre } from "@/lib/centres";
import { pageMetadata, breadcrumbJsonLd, jsonLd } from "@/lib/seo";

export function generateStaticParams() { return centres.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const centre = getCentre(slug); return centre ? pageMetadata(centre.name, centre.intro, `/centres/${slug}`) : {}; }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const centre = getCentre(slug); if (!centre) notFound();
  const related = centres.filter((item) => item.slug !== slug && (item.district === centre.district || item.hub)).slice(0, 3);
  const bc = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Centres", path: "/centres" }, { name: centre.name, path: `/centres/${centre.slug}` }]);
  return <>
    <PageHero variant="place" eyebrow={`${centre.locality} · ${centre.district} · ${centre.type}`} title={centre.name} intro={centre.intro} image={centre.heroImage ? { ...centre.heroImage, priority: true, sizes: "(max-width: 980px) calc(100vw - 48px), 42vw", aspect: "4 / 3" } : undefined} />
    <section className="container centre-facts"><div><p className="eyebrow">Type</p><strong>{centre.type}</strong></div><div><p className="eyebrow">Historical period</p><strong>{centre.historicalPeriod}</strong></div><div><p className="eyebrow">Source</p><strong>Publication pages {centre.source.pages.join(", ")}</strong></div></section>
    <section className="container article-sections section-pad">
      <article><div><h2>Origins</h2><p>{centre.origin}</p>{centre.founder ? <p><strong>Founder or early figure:</strong> {centre.founder}</p> : null}</div></article>
      <article><div><h2>Relationship with Rinpoche</h2><p>{centre.relationshipToRinpoche}</p></div></article>
      <article><div><h2>Relationship with Ngagdra</h2><p>{centre.relationshipToNgagdra}</p></div></article>
    </section>
    {centre.majorDates.length ? <section className="paper-band section-pad"><div className="container"><p className="eyebrow">Historical timeline</p><div className="centre-timeline">{centre.majorDates.map((item) => <article key={`${item.date}-${item.title}`}><strong>{item.date}</strong><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></div></section> : null}
    <section className="container section-pad centre-practice-grid"><div><p className="eyebrow">Practitioners</p><h2>Practice at the centre</h2><p>{centre.practitionerType}</p>{centre.retreatDurations.length ? <ul>{centre.retreatDurations.map((item) => <li key={item}>{item}</li>)}</ul> : null}</div>{centre.sacredFeatures.length ? <div><p className="eyebrow">Sacred features</p><h2>Heritage at the site</h2><ul>{centre.sacredFeatures.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}</section>
    <section className="container section-pad"><div className="section-heading"><p className="eyebrow">Related centres</p><h2>Continue through the network.</h2></div><div className="related-links">{related.map((item) => <Link href={`/centres/${item.slug}`} key={item.slug}><span>{item.locality} · {item.district}</span><strong>{item.name}</strong></Link>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(bc) }} />
  </>;
}
