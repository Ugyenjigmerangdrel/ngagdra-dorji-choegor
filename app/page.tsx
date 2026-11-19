import { fillSizes } from "@/lib/images";
import { Arrow } from "@/components/Arrow";
import Image from "next/image";
import Link from "next/link";
import { Bleed } from "@/components/Bleed";
import { CountUp } from "@/components/CountUp";
import { HomeAnnouncements } from "@/components/HomeAnnouncements";
import { TextLink } from "@/components/Editorial";
import { NetworkTree } from "@/components/NetworkTree";
import { home, networkAtAGlance, rinpoche, sentences, support } from "@/lib/content";
import { featuredEvent, recentEvents } from "@/lib/events";
import { featuredStory } from "@/lib/stories";

const gallery = [
  { src: "/media/events/public-practice-congregation-side.jpg", alt: "A gathered community seated beneath ceremonial canopies", objectPosition: "50% 50%" },
  { src: "/media/events/teacher-during-public-teaching.jpg", alt: "A Buddhist teacher smiling during a public teaching", objectPosition: "50% 30%" },
  { src: "/media/events/ceremonial-offering-procession.jpg", alt: "Practitioners carrying sacred objects and white ceremonial scarves", objectPosition: "45% 50%" },
];

// Re-rendered every minute so announcements published from the studio appear.
export const revalidate = 60;

export default function HomePage() {
  const latest = [featuredEvent, ...recentEvents.slice(0, 2)];
  return (
    <>
      {/* Hero: one photograph, the full height of the screen, with the site header laid over it. */}
      <section className="home-hero cinema" aria-labelledby="home-title">
        <Image quality={90}
          className="home-hero__photo"
          src="/media/heritage/ceremonial-proceedings.jpg"
          alt="Monks in red ceremonial hats and brocade robes playing horns and cymbals in a procession"
          fill
          priority
          sizes={fillSizes}
          style={{ objectFit: "cover", objectPosition: "58% 38%" }}
        />
        <div className="container home-hero__inner">
          <p className="eyebrow">Kurizampa · Mongar · Eastern Bhutan</p>
          <h1 id="home-title">
            {sentences(home.hero.title).map((line, index) => (
              <span className="home-hero__line" key={line} style={{ ["--i" as string]: index }}><span>{line}</span></span>
            ))}
          </h1>
          <p className="home-hero__lead">{home.hero.intro}</p>
          <div className="actions">
            {home.hero.actions.map((action, index) => (
              <Link key={action.href} className={index === 0 ? "button button--light" : "button button--ghost"} href={action.href}>{action.label}{index === 0 ? <Arrow /> : null}</Link>
            ))}
          </div>
        </div>
        <span className="home-hero__cue" aria-hidden="true" />
      </section>

      {/* Introduction: the statement beside the three paragraphs. */}
      <section className="section home-intro" aria-labelledby="intro-title">
        <div className="container grid">
          <div className="home-intro__head">
            <p className="eyebrow">{home.introduction.eyebrow}</p>
            <h2 id="intro-title">{home.introduction.title}</h2>
          </div>
          <div className="home-intro__body">
            {home.introduction.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href={home.introduction.action.href}>{home.introduction.action.label}</TextLink>
          </div>
        </div>
      </section>

      {/* The four pillars, each word set large on the deep brand ground. */}
      <section className="home-pillars" aria-label="Study, practice, preserve, serve">
        <ol className="container">
          {home.pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <span className="index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <Bleed images={gallery} caption="Public practice: the gathered community, a teacher during a public teaching, and sacred objects carried in procession." />

      {/* The network: three large figures that count up, then the tree of places. */}
      <section className="section section--brand home-network" aria-labelledby="network-title">
        <div className="container">
          <div className="home-network__head">
            <p className="eyebrow">{networkAtAGlance.eyebrow}</p>
            <h2 id="network-title">{networkAtAGlance.title}</h2>
            <p>{networkAtAGlance.intro}</p>
          </div>
          <dl className="home-figures">
            {networkAtAGlance.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd><CountUp value={stat.value} /></dd>
              </div>
            ))}
          </dl>
          <div className="home-network__foot">
            <p className="note">{networkAtAGlance.peopleNote}</p>
            <TextLink href={networkAtAGlance.action.href}>{networkAtAGlance.action.label}</TextLink>
          </div>
        </div>
        <div className="container network-wrap">
          <NetworkTree caption="The figures above count practitioners in retreat today. The tree shows every documented place of practice, including monasteries and the nunnery, by Dzongkhag." />
        </div>
      </section>

      {/* Founder: a photograph the height of the section beside the introduction. */}
      <section className="home-split" aria-labelledby="founder-title">
        <figure className="home-split__media">
          <Image quality={90} src="/media/rinpoche/with-nuns.jpg" alt="H.E. Gyeltshen Trulku Rinpoche seated with a group of nuns outside a building" fill sizes="(max-width: 860px) 100vw, 120vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
        </figure>
        <div className="home-split__copy">
          <p className="eyebrow">Founder and Spiritual Head</p>
          <h2 id="founder-title">{rinpoche.name}</h2>
          <p>{rinpoche.intro}</p>
          <TextLink href="/about/rinpoche">Read the biography</TextLink>
        </div>
      </section>

      <HomeAnnouncements />

      <section className="section" aria-labelledby="chronicle-title">
        <div className="container rail">
          <div className="rail__head">
            <div className="section-head">
              <p className="eyebrow">The living chronicle</p>
              <h2 id="chronicle-title">Teachings, ceremonies and gatherings.</h2>
              <TextLink href="/events">Explore the chronicle</TextLink>
            </div>
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

      {/* Featured story: a full-width photograph with the story set on a card over it. */}
      <section className="home-story" aria-labelledby="story-title">
        <Image quality={90} src={featuredStory.image.src} alt={featuredStory.image.alt} fill sizes={fillSizes} style={{ objectFit: "cover", objectPosition: featuredStory.image.objectPosition }} />
        <div className="container">
          <div className="home-story__card">
            <p className="eyebrow">Featured story · {featuredStory.meta}</p>
            <h2 id="story-title">{featuredStory.title}</h2>
            {featuredStory.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href={`/stories/${featuredStory.slug}`}>{featuredStory.cta}</TextLink>
          </div>
        </div>
      </section>

      <section className="closing closing--photo">
        <Image quality={90} src="/media/centres/gawa-mani-chorten-construction.jpg" alt="" fill sizes={fillSizes} style={{ objectFit: "cover", objectPosition: "50% 55%" }} />
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
