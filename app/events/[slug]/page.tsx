import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialImage } from "@/components/EditorialImage";
import { events } from "@/lib/content";
import { site } from "@/lib/site";
import { pageMetadata, jsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() { return events.map((event) => ({ slug: event.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const event = events.find((item) => item.slug === slug); return event ? pageMetadata(event.title, event.dek, `/events/${event.slug}`) : {}; }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();
  const eventLd = { "@context": "https://schema.org", "@type": "Event", name: event.title, description: event.dek, startDate: event.date, eventStatus: "https://schema.org/EventCompleted", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", location: { "@type": "Place", name: event.location }, organizer: { "@id": `${site.url}/#organization` }, url: `${site.url}/events/${event.slug}`, ...(event.imageProvenanceVerified ? { image: `${site.url}${event.image.src}` } : {}) };
  const bc = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Events", path: "/events" }, { name: event.title, path: `/events/${event.slug}` }]);
  return (
    <>
      <article className="article-page">
        <header className="article-header container"><p className="eyebrow">Past Event · {event.dateLabel}</p><h1>{event.title}</h1><p className="lead">{event.dek}</p><div className="article-meta">{event.location}</div></header>
        <EditorialImage {...event.image} priority sizes="(max-width: 680px) 100vw, (max-width: 1440px) calc(100vw - 48px), 1440px" aspect="16 / 9" className="article-hero-image" />
        <div className="reading-column"><p className="article-intro">{event.intro}</p><section><h2>The consecration</h2><p>On 30 October 2015, H.H. the 70th Je Khenpo, Trulku Jigme Choedra, formally consecrated Ngagdra Dorji Choegar and the Hey Vajra statue housed at the institute.</p></section><section><h2>Royal attendance</h2><p>His Royal Highness Gyaltshab Jigme Dorji Wangchuck attended the ceremony, accompanied by Her Royal Highness Azhi Yeatso Lhamo. The event coincided with the national observance of the 60th birth anniversary of His Majesty the Fourth Druk Gyalpo, Jigme Singye Wangchuck.</p></section><aside className="editorial-note"><strong>Source</strong><p>{event.source.publication}, page {event.source.pages.join(", ")}.</p></aside><Link className="text-link" href="/events">← All events</Link></div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(eventLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(bc) }} />
    </>
  );
}
