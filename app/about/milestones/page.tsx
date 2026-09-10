import { EditorialImage } from "@/components/EditorialImage";
import { PageHero } from "@/components/PageHero";
import { milestones } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Milestones", "Key dates in the institutional history of Ngagdra Dorji Choegar.", "/about/milestones");

export default function Page() {
  return (
    <>
      <PageHero variant="archive" eyebrow="Milestones" title="Lineage, retreat centres and the foundation of Ngagdra." intro="The timeline selects key events from the publication, beginning with Thruelzhig Gyeltshen Marpo and continuing through the recent development of the retreat network." />
      <section className="container timeline-development">
        <EditorialImage
          src="/media/institution/ngagdra-development-2006-2020.jpg"
          alt="Two views of the Ngagdra site showing its development between 2006 and 2020"
          caption="The Ngagdra site pictured in 2006 and 2020."
          sizes="(max-width: 680px) calc(100vw - 40px), 820px"
          aspect="1 / 1"
          objectFit="contain"
        />
      </section>
      <section className="container timeline section-pad">
        {milestones.map((milestone) => (
          <article key={milestone.year}>
            <div className="timeline-year">{milestone.year}</div>
            <div>
              <p className="eyebrow">{milestone.date}</p><h2>{milestone.title}</h2><p className="lead">{milestone.body}</p>
              <span className="verified-pill">Publication pages {milestone.source.pages.join(", ")}</span>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
