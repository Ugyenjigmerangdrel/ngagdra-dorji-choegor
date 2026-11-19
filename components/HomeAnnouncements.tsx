import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { TextLink } from "@/components/Editorial";
import { bhutanDate, dateLabel, getAnnouncements } from "@/lib/cms";

/** The latest announcements from the studio. Renders nothing at all when there are none. */
export async function HomeAnnouncements() {
  const announcements = (await getAnnouncements()).slice(0, 3);
  if (!announcements.length) return null;
  return (
    <section className="section section--band" aria-labelledby="announcements-title">
      <div className="container rail">
        <div className="rail__head">
          <div className="section-head">
            <h2 id="announcements-title">Announcements</h2>
            <TextLink href="/announcements">All announcements</TextLink>
          </div>
        </div>
        <ol className="rail__body event-list">
          {announcements.map((item) => {
            const date = bhutanDate(item.publishedAt);
            return (
              <li key={item.slug}>
                <Link href={`/announcements#${item.slug}`}>
                  <time dateTime={date}>{dateLabel(date)}</time>
                  <strong>{item.title}</strong>
                  {item.excerpt ? <span className="event-list__text">{item.excerpt}</span> : null}
                  <span className="cue">Read announcement<Arrow /></span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
