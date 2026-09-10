import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { events, publicPracticeGallery, recurringPractices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Events", "Historical events and recurring public religious practices documented at Ngagdra Dorji Choegar.", "/events");

function eventDateParts(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);
  return {
    day: String(parsed.getUTCDate()),
    month: parsed.toLocaleString("en-GB", { month: "long", timeZone: "UTC" }),
    year: String(parsed.getUTCFullYear()),
  };
}

export default function Page() {
  return (
    <>
      <section className="events-header container"><div><p className="eyebrow">Events</p><h1>Teachings, ceremonies and gatherings.</h1></div><p>Public religious practices and significant moments in the institutional record.</p><dl className="events-header__index"><div><dt>Annual</dt><dd>{recurringPractices.length} recurring practices</dd></div><div><dt>Archive</dt><dd>{events.length} documented event</dd></div></dl></section>
      <section className="paper-band events-current"><div className="container events-current__grid"><div><p className="eyebrow">Current programme</p><h2>No public date is announced.</h2></div><p>The next public programme will be announced here. Annual practices and the historical record remain available below.</p></div></section>
      <section className="container events-documentary"><header><p className="eyebrow">Community in practice</p><h2>Gathering for shared religious life.</h2><p>Public programmes bring teachers, practitioners and the wider community together for teaching, prayer and ceremonial practice.</p></header><div className="events-gallery">{publicPracticeGallery.map((image) => <EditorialImage {...image} key={image.src} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1024px) 46vw, 42vw" />)}</div></section>
      <section id="annual-practices" className="container events-recurring"><div className="events-section-label"><p className="eyebrow">Annual practice</p><span>Recurring programmes</span></div><div className="practice-list">{recurringPractices.map((practice) => <div key={practice}><span>Every year</span><strong>{practice}</strong></div>)}</div></section>
      <section id="event-archive" className="container events-archive"><div className="events-archive__heading"><p className="eyebrow">Archive</p><h2>Institutional record</h2></div>{events.map((event) => { const { day, month, year } = eventDateParts(event.date); return <Link className="event-record" href={`/events/${event.slug}`} key={event.slug}><time dateTime={event.date}><span>{day}</span>{month}<br />{year}</time><div><p className="eyebrow">{event.category}</p><h2>{event.title}</h2><p>{event.dek}</p><small>{event.location}</small></div><b>↗</b></Link>; })}</section>
    </>
  );
}
