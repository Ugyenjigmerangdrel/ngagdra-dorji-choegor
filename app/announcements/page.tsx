import { PageHeader } from "@/components/PageHeader";
import { bhutanDate, dateLabel, getAnnouncements } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";

const lead = "Announcements related to events and activities at Ngagdra Dorji Choegar, Kurizampa.";

export const metadata = pageMetadata("Announcements", lead, "/announcements");

// Re-rendered every minute so announcements published from the studio appear, and expired ones drop off.
export const revalidate = 60;

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();
  return (
    <>
      <PageHeader
        title="Announcements"
        lead={lead}
        crumbs={[{ name: "Announcements", path: "/announcements" }]}
        cover={{ src: "/media/events/public-practice-congregation-side.jpg", objectPosition: "50% 50%" }}
      />
      <section className="section" aria-label="Announcements">
        <div className="container rail">
          <div className="rail__head">
            <h2>Latest</h2>
          </div>
          <div className="rail__body">
            {announcements.length ? (
              announcements.map((item) => {
                const date = bhutanDate(item.publishedAt);
                return (
                  <article className="chronicle__entry chronicle__entry--page" id={item.slug} key={item.slug}>
                    <time dateTime={date}>{dateLabel(date)}</time>
                    <div className="chronicle__body">
                      <h3>{item.title}</h3>
                      {item.pinned ? <p className="eyebrow announcement__pin">Pinned</p> : null}
                      {item.excerpt ? <p>{item.excerpt}</p> : null}
                      {item.html.trim() ? <div className="cms-body" dangerouslySetInnerHTML={{ __html: item.html }} /> : null}
                    </div>
                  </article>
                );
              })
            ) : (
              <p className="story-index__empty">There are no announcements at present.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
