import { Arrow } from "@/components/Arrow";
import { AboutNav, AboutPager } from "@/components/AboutNav";
import { EditorialImage } from "@/components/EditorialImage";
import { TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { heritage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Our Heritage", heritage.intro, "/about/heritage");

const figures: Record<string, { src: string; alt: string; caption: string; objectPosition?: string }> = {
  "teachings-and-texts": { src: "/media/heritage/ceremonial-proceedings.jpg", alt: "Monks in ceremonial dress playing ritual instruments in procession", caption: "Ceremonial proceedings within the living practice tradition.", objectPosition: "60% 45%" },
  "sacred-arts": { src: "/media/heritage/ritual-assembly.jpg", alt: "A ritual assembly inside a richly painted temple hall", caption: "A ritual assembly inside a painted temple hall.", objectPosition: "56% 50%" },
};

export default function HeritagePage() {
  return (
    <>
      <AboutNav current="/about/heritage" />
      <PageHeader
        eyebrow={heritage.eyebrow}
        title={heritage.title}
        lead={heritage.intro}
        crumbs={[{ name: "About", path: "/about" }, { name: "Our Heritage", path: "/about/heritage" }]}
        aside={
          <nav aria-label="On this page">
            <p className="eyebrow">On this page</p>
            <ul className="page-index">
              {heritage.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}<Arrow direction="down" /></a></li>)}
            </ul>
          </nav>
        }
      />
      {heritage.sections.map((section, index) => {
        const figure = figures[section.id];
        return (
          <section className={`section${index === 1 ? " section--band" : index ? " section--rule" : ""}`} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="container rail">
              <div className="rail__head">
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {figure ? <EditorialImage {...figure} sizes="(max-width: 860px) calc(100vw - 40px), 30vw" aspect="4 / 3" className="rail__figure" /> : null}
              </div>
              <div className="rail__body prose">
                {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
                {section.id === "sacred-arts" ? <TextLink href="/centres/togden-choeling-drubdey">Togden Choeling Drubdey</TextLink> : null}
                {section.id === "practice-traditions" ? <TextLink href="/our-work">Explore our work</TextLink> : null}
              </div>
            </div>
          </section>
        );
      })}
      <AboutPager current="/about/heritage" />
    </>
  );
}
