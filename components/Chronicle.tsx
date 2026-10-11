import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import { StoryBlocks } from "@/components/Editorial";
import { archiveEvents, chronicle, eventForEntry, type ChronicleEntry } from "@/lib/events";

const yearId = (year: string) => `year-${year}`;

/** Long entries open with their first paragraph and disclose the rest on request. */
function Entry({ entry, year }: { entry: ChronicleEntry; year: string }) {
  const event = eventForEntry(entry.id);
  // Archive highlights (from the Events document) are folded into the chronicle as titled entries.
  const highlight = event && archiveEvents.some((item) => item.slug === event.slug) && event.entries[0] === entry.id ? event : undefined;
  const [first, ...rest] = entry.body;
  const long = rest.length > 1 || entry.body.reduce((length, block) => length + (typeof block === "string" ? block.length : 200), 0) > 700;
  return (
    <article className="chronicle__entry" id={`entry-${entry.id}`}>
      <time>{entry.date} {year.length === 4 ? year : ""}</time>
      <div className="chronicle__body">
        {entry.title || event ? <h4>{entry.title ?? event?.title}</h4> : null}
        {highlight ? <p className="chronicle__standfirst">{highlight.summary[0]}</p> : null}
        {long ? (
          <>
            <StoryBlocks blocks={[first]} />
            <details>
              <summary><span className="summary-closed">Read the full entry</span><span className="summary-open">Show less</span></summary>
              <StoryBlocks blocks={rest} />
            </details>
          </>
        ) : (
          <StoryBlocks blocks={entry.body} />
        )}
        {event ? <Link className="text-link text-link--small" href={`/events/${event.slug}`}>View event<Arrow /></Link> : null}
      </div>
    </article>
  );
}

export function Chronicle() {
  return (
    <div className="chronicle">
      <nav className="chronicle__years" aria-label="Jump to a year">
        {chronicle.map((group) => <a key={group.year} href={`#${yearId(group.year)}`}>{group.year.replace("-", "–")}</a>)}
      </nav>
      {chronicle.map((group) => (
        <section className="chronicle__year" id={yearId(group.year)} key={group.year} aria-labelledby={`${yearId(group.year)}-title`}>
          <h3 id={`${yearId(group.year)}-title`}>{group.year.replace("-", "–")}</h3>
          <div>
            {group.entries.map((entry) => <Entry entry={entry} year={group.year} key={entry.id} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
