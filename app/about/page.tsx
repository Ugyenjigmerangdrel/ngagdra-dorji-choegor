import { AboutNav, AboutPager } from "@/components/AboutNav";
import { Bleed } from "@/components/Bleed";
import { EditorialImage } from "@/components/EditorialImage";
import { SectionHead, TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { about, heritage, lineage, milestones, rinpoche, sentences } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Ngagdra", about.intro, "/about");

export default function AboutPage() {
  const today = milestones.entries.find((entry) => entry.id === "today")!;
  return (
    <>
      <AboutNav current="/about" />
      <PageHeader
        kicker={about.indexTitle}
        title={sentences(about.title).map((line) => <span className="line" key={line}>{line}</span>)}
        lead={about.intro}
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="section" id="the-institute" aria-labelledby="institute-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="institute-title" eyebrow="Who we are" title={about.institute.title} />
            <EditorialImage
              src="/media/institution/ngagdra-development-2006-2020.jpg"
              alt="Two views of the Ngagdra site above Kurizampa, in 2006 before construction and in 2020"
              caption="The Ngagdra site in 2006 and in 2020."
              sizes="(max-width: 860px) calc(100vw - 40px), 30vw"
              aspect="1 / 1"
              objectFit="contain"
              className="rail__figure"
            />
          </div>
          <div className="rail__body prose">
            {about.institute.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href="/centres/ngagdra-dorji-choegar">The full story of the institute</TextLink>
          </div>
        </div>
      </section>

      <Bleed images={[{ src: "/media/education/ngagdra-monks.jpg", alt: "Young monks of Ngagdra Dorji Choegar standing together in ceremonial scarves", objectPosition: "50% 38%" }]} caption="Young monks of Ngagdra Dorji Choegar." />

      <section className="section section--band">
        <div className="container grid feature">
          <EditorialImage
            src="/media/rinpoche/with-retreat-practitioners.jpg"
            alt="H.E. Gyeltshen Trulku Rinpoche seated before a shrine with practitioners standing beside him"
            caption="H.E. Gyeltshen Trulku Rinpoche with practitioners."
            sizes="(max-width: 860px) 360px, 25vw"
            aspect="3 / 4"
            className="feature__media feature__media--portrait"
          />
          <div className="feature__copy">
            <SectionHead eyebrow="Our founder / spiritual head" title={rinpoche.name} intro={rinpoche.intro} action={{ label: "Read the biography", href: "/about/rinpoche" }} />
          </div>
        </div>
      </section>

      <section className="section section--brand">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead eyebrow="Our lineage" title={lineage.title} intro={lineage.intro} action={{ label: "Our lineage", href: "/about/history" }} />
          </div>
          <ol className="rail__body lineage" aria-label="Line of transmission">
            {lineage.chain.map((name) => <li key={name}><strong>{name}</strong></li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead eyebrow="Our vision" title={heritage.title} action={{ label: "Our vision", href: "/about/heritage" }} />
          </div>
          <div className="rail__body prose prose--lead"><p>{heritage.intro}</p></div>
        </div>
      </section>

      <section className="section section--band">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead eyebrow="Ngagdra today" title="Today" action={{ label: "Milestones", href: "/about/milestones" }} />
          </div>
          <div className="rail__body prose prose--lead"><p>{today.body}</p></div>
        </div>
      </section>
      <AboutPager current="/about" />
    </>
  );
}
