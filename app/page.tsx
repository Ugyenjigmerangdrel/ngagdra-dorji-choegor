import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import { Bleed } from "@/components/Bleed";
import { EditorialImage } from "@/components/EditorialImage";
import { SectionHead, Stats, TextLink } from "@/components/Editorial";
import { NetworkTree } from "@/components/NetworkTree";
import { PageHeader } from "@/components/PageHeader";
import { home, networkAtAGlance, rinpoche, sentences, support } from "@/lib/content";
import { featuredEvent, recentEvents } from "@/lib/events";
import { featuredStory } from "@/lib/stories";

export default function HomePage() {
  const latest = [featuredEvent, ...recentEvents.slice(0, 2)];
  return (
    <>
      <PageHeader
        display
        eyebrow="Kurizampa · Mongar · Eastern Bhutan"
        title={sentences(home.hero.title).map((line) => <span className="line" key={line}>{line}</span>)}
        lead={home.hero.intro}
        actions={home.hero.actions.map((action, index) => (
          <Link key={action.href} className={index === 0 ? "button" : "button button--ghost"} href={action.href}>{action.label}</Link>
        ))}
        image={{
          src: "/media/institution/ngagdra-kurizampa-drawing-green.png",
          alt: "Drawing of Ngagdra Dorji Choegar at Kurizampa, Mongar: white-walled buildings with red-brown timber, a great thangka banner and a prayer-flag pole",
          priority: true,
          sizes: "(max-width: 860px) calc(100vw - 40px), 50vw",
          aspect: "1422 / 967",
          objectFit: "contain",
          frame: false,
        }}
      />

      <section className="section">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead eyebrow={home.introduction.eyebrow} title={home.introduction.title} />
          </div>
          <div className="rail__body prose prose--lead">
            {home.introduction.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href={home.introduction.action.href}>{home.introduction.action.label}</TextLink>
          </div>
        </div>
        <div className="container">
          <ul className="pillars">
            {home.pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Bleed images={[{ src: "/media/heritage/ceremonial-proceedings.jpg", alt: "Monks in red ceremonial hats and brocade robes playing horns and cymbals in a procession", objectPosition: "58% 42%" }]} caption="Ceremonial proceedings within the living practice tradition." />

      <section className="section section--brand" aria-labelledby="network-title">
        <div className="container rail rail--top">
          <div className="rail__head">
            <SectionHead id="network-title" eyebrow={networkAtAGlance.eyebrow} title={networkAtAGlance.title} intro={networkAtAGlance.intro} />
          </div>
          <div className="rail__body">
            <Stats className="stats--large" items={networkAtAGlance.stats} />
            <p className="note">{networkAtAGlance.peopleNote}</p>
            <TextLink href={networkAtAGlance.action.href}>{networkAtAGlance.action.label}</TextLink>
          </div>
        </div>
        <div className="container network-wrap">
          <NetworkTree caption="The figures above count practitioners in retreat today. The tree shows every documented place of practice, including monasteries and the nunnery, by Dzongkhag." />
        </div>
      </section>

      <section className="section">
        <div className="container grid feature">
          <EditorialImage
            src="/media/rinpoche/portrait-archive.jpg"
            alt="Archival seated portrait of H.E. Gyeltshen Trulku Rinpoche"
            caption="H.E. Gyeltshen Trulku Rinpoche."
            sizes="(max-width: 700px) calc(100vw - 40px), 30vw"
            aspect="4 / 5"
            objectFit="contain"
            className="feature__media feature__media--portrait"
          />
          <div className="feature__copy">
            <SectionHead eyebrow="Our founder / spiritual head" title={rinpoche.name} intro={rinpoche.intro} action={{ label: "Read the biography", href: "/about/rinpoche" }} />
          </div>
        </div>
      </section>

      <section className="section section--rule">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead eyebrow="The Living Chronicle" title="Teachings, ceremonies and gatherings." action={{ label: "Explore the chronicle", href: "/events" }} />
          </div>
          <ol className="rail__body event-list">
            {latest.map((event) => (
              <li key={event.slug}>
                <Link href={`/events/${event.slug}`}>
                  <time>{event.dateLabel}</time>
                  <span className="event-list__label">{event.label}</span>
                  <strong>{event.title}</strong>
                  <span className="event-list__text">{event.summary[0]}</span>
                  <span className="cue">View event<Arrow /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--band">
        <div className="container grid feature feature--reverse">
          <EditorialImage {...featuredStory.image} sizes="(max-width: 700px) calc(100vw - 40px), 54vw" aspect="3 / 2" className="feature__media" />
          <div className="feature__copy">
            <p className="eyebrow">Featured story · {featuredStory.meta}</p>
            <h2>{featuredStory.title}</h2>
            <div className="prose">
              {featuredStory.paragraphs.map((text) => <p key={text}>{text}</p>)}
            </div>
            <TextLink href={`/stories/${featuredStory.slug}`}>{featuredStory.cta}</TextLink>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="container grid closing__grid">
          <div className="closing__copy">
            <h2>{support.title}</h2>
            <p className="lead">{support.lead}</p>
          </div>
          <div className="closing__actions">
            <p>{support.requires.closing}</p>
            <Link className="button button--light" href="/support">Support Ngagdra</Link>
            <TextLink href="/visit" className="text-link--light">Plan a visit</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
