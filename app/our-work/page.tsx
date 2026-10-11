import { Arrow } from "@/components/Arrow";
import { Bleed } from "@/components/Bleed";
import { EditorialImage } from "@/components/EditorialImage";
import { Steps } from "@/components/Editorial";
import { NextSteps } from "@/components/NextSteps";
import { PageHeader } from "@/components/PageHeader";
import { ourWork } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Our Work", ourWork.intro, "/our-work");

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        title={ourWork.title}
        lead={ourWork.intro}
        crumbs={[{ name: "Our Work", path: "/our-work" }]}
        aside={
          <nav aria-label="Areas of work">
            <ul className="page-index">
              {ourWork.areas.map((area) => <li key={area.slug}><a href={`#${area.slug}`}>{area.title}<Arrow direction="down" /></a></li>)}
            </ul>
          </nav>
        }
      />

      <section className="section">
        <div className="container">
          <ol className="areas">
            {ourWork.areas.map((area, index) => (
              <li className="area" id={area.slug} key={area.slug}>
                <EditorialImage {...area.image} sizes="(max-width: 860px) calc(100vw - 40px), 40vw" aspect="4 / 3" className="area__media" />
                <div className="area__copy">
                  <span className="index">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{area.title}</h2>
                  <p>{area.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Bleed images={[{ src: "/media/centres/retreat-centres.jpg", alt: "Retreat houses connected by paths on a forested hillside in eastern Bhutan", objectPosition: "50% 48%" }]} caption="Retreat houses on a forested hillside in eastern Bhutan." />

      <section className="section section--brand" aria-labelledby="journey-title">
        <div className="container">
          <div className="section-head section-head--wide">
            <h2 id="journey-title">{ourWork.journey.title}</h2>
          </div>
          <Steps steps={ourWork.journey.steps} label={ourWork.journey.title} />
        </div>
      </section>
      <NextSteps />
    </>
  );
}
