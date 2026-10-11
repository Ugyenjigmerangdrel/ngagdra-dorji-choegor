import { AboutNav, AboutPager } from "@/components/AboutNav";
import { TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { lineage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Lineage and History", lineage.intro, "/about/history");

export default function LineagePage() {
  return (
    <>
      <AboutNav current="/about/history" />
      <PageHeader
        eyebrow={lineage.eyebrow}
        kicker={lineage.kicker}
        title={lineage.title}
        lead={lineage.intro}
        crumbs={[{ name: "About", path: "/about" }, { name: "Lineage and History", path: "/about/history" }]}
        image={{ src: "/media/rinpoche/early-group-archive.jpg", alt: "Archival group portrait of Buddhist teachers and young practitioners", caption: "An archival group photograph of teachers and practitioners.", priority: true, sizes: "(max-width: 860px) calc(100vw - 40px), 34vw", aspect: "4 / 5", objectFit: "contain" }}
      />

      <section className="section" aria-label="The lineage">
        <div className="container rail">
          <div className="rail__head">
            <p className="eyebrow">Line of transmission</p>
            <ol className="lineage">
              {lineage.chain.map((name) => <li key={name}><strong>{name}</strong></li>)}
            </ol>
          </div>
          <div className="rail__body prose">
            {lineage.overview.map((text) => <p key={text}>{text}</p>)}
            <TextLink href="/about/rinpoche">Read the biography</TextLink>
          </div>
        </div>
      </section>

      <section className="section section--band" id="researchers" aria-labelledby="researchers-title">
        <div className="container rail">
          <div className="rail__head">
            <h2 id="researchers-title">{lineage.researchers.title}</h2>
          </div>
          <div className="rail__body prose">
            {lineage.researchers.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href="/about/heritage">Our vision</TextLink>
          </div>
        </div>
      </section>
      <AboutPager current="/about/history" />
    </>
  );
}
