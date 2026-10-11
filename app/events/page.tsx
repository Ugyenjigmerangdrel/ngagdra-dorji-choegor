import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import { Chronicle } from "@/components/Chronicle";
import { Bleed } from "@/components/Bleed";
import { NextSteps } from "@/components/NextSteps";
import { PageHeader } from "@/components/PageHeader";
import { eventStatus, eventsIntro, featuredEvent, pastEventsIntro, recentEvents } from "@/lib/events";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Events", eventsIntro.intro[0], "/events");

// Re-render daily so event status labels stay current.
export const revalidate = 86400;

const gallery = [
  { src: "/media/events/public-practice-congregation-side.jpg", alt: "A gathered community seated beneath ceremonial canopies", objectPosition: "50% 50%" },
  { src: "/media/events/teacher-during-public-teaching.jpg", alt: "A Buddhist teacher smiling during a public teaching", objectPosition: "50% 30%" },
  { src: "/media/events/ceremonial-offering-procession.jpg", alt: "Practitioners carrying sacred objects and white ceremonial scarves", objectPosition: "45% 50%" },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow={eventsIntro.eyebrow}
        title={eventsIntro.title}
        lead={eventsIntro.intro}
        crumbs={[{ name: "Events", path: "/events" }]}
        aside={
          <nav aria-label="On this page">
            <ul className="page-index">
              <li><a href="#featured">Featured event<Arrow direction="down" /></a></li>
              <li><a href="#recent">Recent events<Arrow direction="down" /></a></li>
              <li><a href="#chronicle">Past events, year by year<Arrow direction="down" /></a></li>
            </ul>
          </nav>
        }
      />

      <section className="section section--brand" id="featured" aria-labelledby="featured-title">
        <div className="container">
          <h2 className="eyebrow" id="featured-title">Featured event</h2>
          <Link className="featured-event" href={`/events/${featuredEvent.slug}`}>
            <div className="featured-event__when">
              <time dateTime={featuredEvent.date}>{featuredEvent.dateLabel}</time>
              <span>{featuredEvent.label}</span>
              <span className="status">{eventStatus(featuredEvent)}</span>
            </div>
            <div className="featured-event__copy">
              <h3>{featuredEvent.title}</h3>
              {featuredEvent.summary.map((text) => <p key={text}>{text}</p>)}
              <span className="cue">View event<Arrow /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" id="recent" aria-labelledby="recent-title">
        <div className="container rail">
          <div className="rail__head">
            <h2 id="recent-title">Recent events</h2>
          </div>
          <ol className="rail__body event-list">
            {recentEvents.map((event) => (
              <li key={event.slug}>
                <Link href={`/events/${event.slug}`}>
                  <time dateTime={event.date}>{event.dateLabel}</time>
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

      <Bleed images={gallery} caption="Public practice: the gathered community, a teacher during a public teaching, and sacred objects carried in procession." />

      <section className="section" id="chronicle" aria-labelledby="chronicle-title">
        <div className="container">
          <div className="section-head section-head--wide">
            <h2 id="chronicle-title">{pastEventsIntro.title}</h2>
            <p>{pastEventsIntro.intro}</p>
          </div>
          <Chronicle />
        </div>
      </section>

      <NextSteps exclude="/events" />
    </>
  );
}
