import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import { Bleed } from "@/components/Bleed";
import { SectionHead, Stats, TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { RetreatIcon } from "@/components/RetreatIcon";
import { getCentre } from "@/lib/centres";
import { networkAtAGlance, support } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { contactPending } from "@/lib/site";

export const metadata = pageMetadata("Support", `${support.lead} ${support.requires.closing}`, "/support");

export default function SupportPage() {
  const needs = support.needs.items.map((item) => ({ ...item, centre: getCentre(item.centre)! }));
  return (
    <>
      <PageHeader
        title={support.title}
        lead={support.lead}
        crumbs={[{ name: "Support", path: "/support" }]}
        aside={
          <nav aria-label="On this page">
            <ul className="page-index">
              <li><a href="#who-we-support">Who we support<Arrow direction="down" /></a></li>
              <li><a href="#what-a-retreat-requires">What a retreat requires<Arrow direction="down" /></a></li>
              <li><a href="#priority-needs">Current priority needs<Arrow direction="down" /></a></li>
              <li><a href="#how-to-support">How to support<Arrow direction="down" /></a></li>
            </ul>
          </nav>
        }
      />

      <section className="section section--brand" id="who-we-support" aria-labelledby="who-title">
        <div className="container rail rail--top">
          <div className="rail__head">
            <SectionHead id="who-title" eyebrow="Who we support" title={networkAtAGlance.title} intro={networkAtAGlance.intro} />
          </div>
          <div className="rail__body">
            <Stats className="stats--large" items={networkAtAGlance.stats} />
            <p className="note">{networkAtAGlance.peopleNote}</p>
            <TextLink href={networkAtAGlance.action.href}>{networkAtAGlance.action.label}</TextLink>
          </div>
        </div>
      </section>

      <Bleed images={[{ src: "/media/centres/gawa-mani-chorten-construction.jpg", alt: "Community members working around a chorten under construction on a hillside", objectPosition: "50% 55%" }]} caption="Communal work during construction of the Gawa Mani chorten." />

      <section className="section section--band" id="what-a-retreat-requires" aria-labelledby="requires-title">
        <div className="container">
          <div className="section-head section-head--wide">
            <h2 id="requires-title">{support.requires.title}</h2>
            <p>{support.requires.intro}</p>
          </div>
          <ul className="requires">
            {support.requires.items.map((item) => (
              <li key={item.title}>
                <RetreatIcon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="requires-closing">{support.requires.closing}</p>
        </div>
      </section>

      <section className="section" id="priority-needs" aria-labelledby="needs-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="needs-title" eyebrow={support.needs.eyebrow} title={support.needs.title} />
          </div>
          <ul className="rail__body needs">
            {needs.map((need) => (
              <li key={need.centre.slug}>
                <Link href={`/centres/${need.centre.slug}`}>
                  <span className="needs__place">{need.centre.type} · {need.centre.place}</span>
                  <strong>{need.centre.name}</strong>
                  <p>{need.text}</p>
                  <span className="cue">Explore centre<Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing" id="how-to-support" aria-labelledby="how-title">
        <div className="container grid closing__grid">
          <div className="closing__copy">
            <h2 id="how-title">{support.how.title}</h2>
            <p className="lead">The institute determines where support is directed according to current need. Direct contribution details are not yet published on this website.</p>
          </div>
          <div className="closing__actions">
            <p className="pending-note pending-note--light">{contactPending}</p>
            <Link className="button button--light" href="/centres">Explore the centres</Link>
          </div>
        </div>
      </section>
    </>
  );
}
