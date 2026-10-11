import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import { SectionHead } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { Bleed } from "@/components/Bleed";
import { NextSteps } from "@/components/NextSteps";
import { pageMetadata } from "@/lib/seo";
import { contactPending } from "@/lib/site";

export const metadata = pageMetadata("Visit Ngagdra", "Location and visitor guidance for Ngagdra Dorji Choegar in Kurizampa, Mongar, Eastern Bhutan.", "/visit");

const steps = [
  ["Find the institute", "The institute is in Kurizampa, above the Kurichu River and Kurizampa bridge in Mongar, Eastern Bhutan."],
  ["Arrange your visit", "Teaching attendance and visits are arranged directly with the institute before travel."],
  ["Follow local guidance", "Please follow the guidance of the monastic community during ceremonies, teachings and daily activities."],
];

export default function VisitPage() {
  return (
    <>
      <PageHeader
        title="Visit Ngagdra Dorji Choegar."
        lead="Plan directly with the institute before travelling to Kurizampa in Mongar, Eastern Bhutan."
        crumbs={[{ name: "Visit", path: "/visit" }]}
        actions={<a className="button" href="#visitor-information">Read visitor information<Arrow direction="down" /></a>}
        aside={
          <dl className="facts">
            <div><dt>Place</dt><dd>Kurizampa</dd></div>
            <div><dt>Dzongkhag</dt><dd>Mongar</dd></div>
            <div><dt>Region</dt><dd>Eastern Bhutan</dd></div>
          </dl>
        }
        image={{ src: "/media/institution/ngagdra-kurizampa-drawing-green.png", alt: "Drawing of Ngagdra Dorji Choegar above the Kurichu River at Kurizampa", caption: "Ngagdra Dorji Choegar above the Kurichu River at Kurizampa, Mongar.", priority: true, sizes: "(max-width: 1280px) calc(100vw - 40px), 1280px", aspect: "16 / 7", objectFit: "contain", frame: false }}
        imageLayout="wide"
      />
      <section className="section" id="visitor-information" aria-labelledby="visit-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="visit-title" eyebrow="Before you travel" title="Three things to know." intro="Visits and teaching attendance require direct arrangement with the institute." />
          </div>
          <ol className="rail__body needs">
            {steps.map(([title, body], index) => (
              <li key={title}>
                <div className="needs__row">
                  <span className="index">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="rail__body pending-note">{contactPending}</p>
        </div>
      </section>
      <Bleed images={[{ src: "/media/community/public-blessing.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche moving through a seated crowd during a public blessing", objectPosition: "43% 40%" }]} caption="Rinpoche among the community during a public blessing." />

      <section className="section section--brand">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead title="Teachings, ceremonies and gatherings." />
          </div>
          <div className="rail__body prose">
            <p>Annual public practices, teachings and ceremonies at Ngagdra are recorded in the living chronicle.</p>
            <Link className="text-link" href="/events">Explore the chronicle<Arrow /></Link>
          </div>
        </div>
      </section>
      <NextSteps exclude="/visit" />
    </>
  );
}
