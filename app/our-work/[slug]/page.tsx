import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialImage } from "@/components/EditorialImage";
import { PageHero } from "@/components/PageHero";
import { workPillars } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return workPillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pillar = workPillars.find((item) => item.slug === slug);
  return pillar ? pageMetadata(pillar.shortTitle, pillar.dek, `/our-work/${pillar.slug}`) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pillar = workPillars.find((item) => item.slug === slug);
  if (!pillar) notFound();

  return (
    <>
      <PageHero
        variant="work"
        path={`/our-work/${pillar.slug}`}
        parent={{ name: "Our Work", path: "/our-work" }}
        eyebrow={`Our Work · ${pillar.index}`}
        title={pillar.title}
        intro={pillar.dek}
        image={{
          ...pillar.image,
          priority: true,
          sizes: "(max-width: 980px) calc(100vw - 48px), 42vw",
          aspect: pillar.slug === "community-public-practice" ? "3 / 2" : "4 / 3",
        }}
      />
      <section className="paper-band work-overview"><div className="container work-overview__grid"><div><p className="eyebrow">Why this matters</p><h2>{pillar.meaning}</h2></div><div><p className="eyebrow">What this includes</p><ul>{pillar.evidence.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
      <section className="container work-body"><aside><p className="eyebrow">In this area</p><p>{pillar.shortTitle}</p></aside><div className="work-body__sections">{pillar.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</div></section>
      {pillar.slug === "retreat-preparation-practice" ? (
        <section className="container lower-editorial-image">
          <EditorialImage src="/media/rinpoche/retreat-cliff.jpg" alt="H.E. Gyeltshen Trulku Rinpoche practising in retreat beside a cliff" sizes="(max-width: 680px) calc(100vw - 80px), 560px" aspect="4 / 3" objectFit="contain" className="archival-figure" />
        </section>
      ) : null}
      {pillar.slug === "community-public-practice" ? (
        <section className="container lower-editorial-image lower-editorial-image--wide">
          <EditorialImage src="/media/community/assembly-hall-gathering.jpg" alt="Monastics and lay practitioners gathered inside the institute assembly hall" sizes="(max-width: 680px) calc(100vw - 40px), 1100px" aspect="3 / 2" objectPosition="50% 48%" />
        </section>
      ) : null}
      <nav className="container next-link" aria-label="Work navigation"><Link href="/our-work">← Return to all areas of work</Link></nav>
    </>
  );
}
