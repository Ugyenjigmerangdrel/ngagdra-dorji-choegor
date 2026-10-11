import { AboutNav, AboutPager } from "@/components/AboutNav";
import { TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { milestones } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Milestones", "The institutional timeline of Ngagdra Dorji Choegar, from the years before 2007 to the institute today.", "/about/milestones");

export default function MilestonesPage() {
  return (
    <>
      <AboutNav current="/about/milestones" />
      <PageHeader
        title={milestones.title}
        crumbs={[{ name: "About", path: "/about" }, { name: "Milestones", path: "/about/milestones" }]}
        image={{ src: "/media/institution/ngagdra-development-2006-2020.jpg", alt: "Two views of the Ngagdra site above Kurizampa, in 2006 before construction and in 2020", caption: "The Ngagdra site in 2006 and in 2020.", priority: true, sizes: "(max-width: 860px) calc(100vw - 40px), 34vw", aspect: "1 / 1", objectFit: "contain" }}
      />
      <section className="section">
        <div className="container">
          <ol className="timeline">
            {milestones.entries.map((entry) => (
              <li key={entry.id} id={entry.id}>
                <h2>{entry.label}</h2>
                <div>
                  <p>{entry.body}</p>
                  {entry.href ? <TextLink href={entry.href}>View event</TextLink> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <AboutPager current="/about/milestones" />
    </>
  );
}
