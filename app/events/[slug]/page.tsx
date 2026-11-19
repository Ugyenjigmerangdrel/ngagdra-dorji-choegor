import { notFound } from "next/navigation";
import { Closer } from "@/components/Closer";
import { StoryBlocks, TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { getPublishedItem, toEventRecord, todayInBhutan, type CmsItem } from "@/lib/cms";
import { allEvents, eventStatus, getChronicleEntry, getEvent } from "@/lib/events";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

// Re-rendered every minute: studio events appear without a redeploy and "Past event" / "Upcoming" stays true.
export const revalidate = 60;

const NGAGDRA = "Ngagdra Dorji Choegar, Kurizampa, Mongar, Bhutan";

/** Where an event took place, from its record or its card label. */
function locationOf(event: { location?: string; label: string }) {
  if (event.location) return event.location;
  if (/Ngagdra/.test(event.label)) return NGAGDRA;
  if (/Tsholing/.test(event.label)) return "Tsholing Gongma Drubdey, Mongar, Bhutan";
  if (/Mongar/.test(event.label)) return "Mongar, Bhutan";
  return undefined;
}

export function generateStaticParams() {
  return allEvents.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (event) return pageMetadata(event.title, event.summary[0], `/events/${slug}`);
  const item = await getPublishedItem("event", slug);
  return item ? pageMetadata(item.title, item.excerpt || item.title, `/events/${slug}`) : {};
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) {
    // Not one of the events from the content documents: look for one published from the studio.
    const item = await getPublishedItem("event", slug);
    if (!item) notFound();
    return <StudioEvent item={item} />;
  }

  const ordered = [...allEvents].sort((a, b) => b.date.localeCompare(a.date));
  const index = ordered.findIndex((item) => item.slug === slug);
  const newer = ordered[index - 1];
  const older = ordered[index + 1];
  const entries = event.entries.map(getChronicleEntry).filter((entry) => entry !== undefined);
  const location = locationOf(event);
  const eventLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary[0],
    startDate: event.date,
    ...(event.endDate ? { endDate: event.endDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(location ? { location: { "@type": "Place", name: location } } : {}),
    organizer: { "@id": `${site.url}/#organization` },
    url: `${site.url}/events/${event.slug}`,
  };

  return (
    <>
      <PageHeader
        eyebrow={event.label}
        title={event.title}
        lead={event.summary}
        crumbs={[{ name: "Events", path: "/events" }, { name: event.title, path: `/events/${event.slug}` }]}
        aside={
          <dl className="facts">
            <div><dt>Date</dt><dd><time dateTime={event.date}>{event.dateLabel}</time></dd></div>
            {location ? <div><dt>Place</dt><dd>{location}</dd></div> : null}
            <div><dt>Status</dt><dd>{eventStatus(event)}</dd></div>
          </dl>
        }
      />

      <section className="section">
        <div className="container rail">
          <div className="rail__head">
            <h2>From the chronicle</h2>
          </div>
          <div className="rail__body">
            {entries.map((entry) => (
              <article className="chronicle__entry chronicle__entry--page" key={entry.id}>
                <time>{entry.date} {entry.year.length === 4 ? entry.year : ""}</time>
                <div className="chronicle__body">
                  {entry.title ? <h3>{entry.title}</h3> : null}
                  <StoryBlocks blocks={entry.body} />
                </div>
              </article>
            ))}
            <TextLink href={`/events#entry-${event.entries[0]}`} className="text-link--small">View in the chronicle</TextLink>
          </div>
        </div>
      </section>

      <Closer
        ariaLabel="More events"
        href={older ? `/events/${older.slug}` : "/events"}
        label={older ? "Earlier" : "Back to"}
        title={older ? older.title : "All events"}
        cta="View event"
        back={newer ? { href: `/events/${newer.slug}`, label: "Newer", title: newer.title } : undefined}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(eventLd) }} />
    </>
  );
}

/** An event written and published in the committee studio. */
function StudioEvent({ item }: { item: CmsItem }) {
  const event = toEventRecord(item);
  const eventLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    ...(event.summary[0] ? { description: event.summary[0] } : {}),
    startDate: event.date,
    ...(event.endDate ? { endDate: event.endDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(event.location ? { location: { "@type": "Place", name: event.location } } : {}),
    ...(item.cover ? { image: item.cover.src } : {}),
    organizer: { "@id": `${site.url}/#organization` },
    url: `${site.url}/events/${event.slug}`,
  };
  return (
    <>
      <PageHeader
        eyebrow={event.label}
        title={event.title}
        lead={event.summary}
        crumbs={[{ name: "Events", path: "/events" }, { name: event.title, path: `/events/${event.slug}` }]}
        cover={item.cover ? { src: item.cover.src } : undefined}
        aside={
          <dl className="facts">
            <div><dt>Date</dt><dd><time dateTime={event.date}>{event.dateLabel}</time></dd></div>
            {event.location ? <div><dt>Place</dt><dd>{event.location}</dd></div> : null}
            <div><dt>Status</dt><dd>{eventStatus(event, todayInBhutan())}</dd></div>
          </dl>
        }
      />
      <div className="section">
        <div className="reading prose story cms-body" dangerouslySetInnerHTML={{ __html: item.html }} />
      </div>
      <Closer ariaLabel="More events" href="/events" label="Back to" title="All events" cta="View events" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(eventLd) }} />
    </>
  );
}
