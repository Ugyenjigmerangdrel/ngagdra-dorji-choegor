import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import { SectionHead, TextLink } from "@/components/Editorial";
import { Bleed } from "@/components/Bleed";
import { NextSteps } from "@/components/NextSteps";
import { PageHeader } from "@/components/PageHeader";
import { centres, districtId, districts } from "@/lib/centres";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Centres",
  "Across eastern Bhutan, retreat centres and places of practice carry connections to teachers, practitioners and communities that have sustained the tradition over generations.",
  "/centres",
);

export default function CentresPage() {
  const hub = centres.find((centre) => centre.hub)!;
  const network = centres.filter((centre) => !centre.hub);
  return (
    <>
      <PageHeader
        eyebrow="Our Network"
        title="Beyond the walls of Ngagdra."
        lead={[
          "The story of Ngagdra is not contained within a single building.",
          "Across eastern Bhutan, retreat centres and places of practice carry connections to teachers, practitioners and communities that have sustained the tradition over generations. Some grew from the meditation places of earlier masters. Others were restored or established when communities sought to revive places of practice. Together, they form a network of living spaces where practitioners can undertake periods of dedicated retreat and meditation.",
        ]}
        crumbs={[{ name: "Centres", path: "/centres" }]}
        actions={<a className="button" href="#directory">Explore the retreat centres<Arrow direction="down" /></a>}
      />

      <Bleed priority images={[{ src: "/media/centres/retreat-centres.jpg", alt: "Retreat houses connected by paths on a forested hillside in eastern Bhutan", objectPosition: "50% 48%" }]} caption="Retreat houses on a forested hillside in eastern Bhutan." />

      <section className="section section--brand" aria-labelledby="hub-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="hub-title" title={hub.name} />
          </div>
          <div className="rail__body prose">
            {hub.summary.map((text) => <p key={text}>{text}</p>)}
            <TextLink href={`/centres/${hub.slug}`}>Explore centre</TextLink>
          </div>
        </div>
      </section>

      <section className="section section--band" id="directory" aria-labelledby="directory-title">
        <div className="container">
          <div className="section-head section-head--wide">
            <h2 id="directory-title">{network.length} places of practice across eastern Bhutan.</h2>
          </div>
          <nav aria-label="Jump to a Dzongkhag">
            <ul className="district-index">
              {districts.map((district) => (
                <li key={district}><a href={`#${districtId(district)}`}>{district}<span>{network.filter((centre) => centre.district === district).length}</span></a></li>
              ))}
            </ul>
          </nav>
          {districts.map((district) => {
            const list = network.filter((centre) => centre.district === district);
            return (
              <section className="directory-group" id={districtId(district)} key={district} aria-labelledby={`${districtId(district)}-title`}>
                <header>
                  <h3 id={`${districtId(district)}-title`}>{district}</h3>
                  <p>{list.length} {list.length === 1 ? "place" : "places"} of practice</p>
                </header>
                <ul>
                  {list.map((centre) => (
                    <li className="directory-item" key={centre.slug}>
                      <Link href={`/centres/${centre.slug}`}>
                        <div>
                          <h4>{centre.name}</h4>
                          <span className="directory-item__meta">{centre.type} · {centre.place}</span>
                        </div>
                        <div className="directory-item__summary">
                          {centre.summary.map((text) => <p key={text}>{text}</p>)}
                          <span className="cue">Explore centre<Arrow /></span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>
      <NextSteps exclude="/centres" />
    </>
  );
}
