import { AboutNav, AboutPager } from "@/components/AboutNav";
import { EditorialImage } from "@/components/EditorialImage";
import { TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { rinpoche } from "@/lib/content";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(rinpoche.name, rinpoche.intro, "/about/rinpoche");

const figures: Record<string, { src: string; alt: string; caption: string; aspect: string; objectFit?: "contain" }> = {
  "early-life": { src: "/media/rinpoche/portrait-archive.jpg", alt: "Archival seated portrait of H.E. Gyeltshen Trulku Rinpoche as a young man", caption: "An archival portrait of Rinpoche.", aspect: "4 / 5", objectFit: "contain" },
  "teaching-and-retreat": { src: "/media/rinpoche/retreat-cliff.jpg", alt: "Archival photograph of Rinpoche seated in retreat on a rock ledge", caption: "Rinpoche in retreat: an archival photograph.", aspect: "1 / 1", objectFit: "contain" },
  "eastern-bhutan": { src: "/media/rinpoche/travelling-horseback.jpg", alt: "Archival photograph of Rinpoche on horseback with monks and attendants", caption: "Travelling in Eastern Bhutan with monks and attendants.", aspect: "3 / 2" },
  ngagdra: { src: "/media/rinpoche/with-nuns.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche seated with a group of nuns", caption: "Rinpoche with nuns.", aspect: "3 / 2" },
};

export default function RinpochePage() {
  const person = { "@context": "https://schema.org", "@type": "Person", name: rinpoche.name, alternateName: "Drub-La Kuenzang Tenpai Gyeltshen", birthDate: "1953", birthPlace: "Tashi Yangtse, Bhutan", description: rinpoche.intro, affiliation: { "@id": `${site.url}/#organization` }, url: `${site.url}/about/rinpoche` };
  return (
    <>
      <AboutNav current="/about/rinpoche" />
      <PageHeader
        eyebrow="Our founder / spiritual head"
        title={rinpoche.name}
        lead={rinpoche.intro}
        crumbs={[{ name: "About", path: "/about" }, { name: "H.E. Gyeltshen Trulku Rinpoche", path: "/about/rinpoche" }]}
        image={{ src: "/media/rinpoche/portrait-ceremonial.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche seated on a ceremonial throne", caption: "H.E. Gyeltshen Trulku Rinpoche.", priority: true, sizes: "(max-width: 860px) calc(100vw - 40px), 40vw", aspect: "3 / 2", objectPosition: "50% 35%" }}
      />
      {rinpoche.sections.map((section, index) => {
        const figure = figures[section.id];
        return (
          <section className={`section${index % 2 ? " section--band" : index ? " section--rule" : ""}`} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="container rail">
              <div className="rail__head">
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {figure ? <EditorialImage {...figure} sizes="(max-width: 860px) calc(100vw - 40px), 30vw" className="rail__figure" /> : null}
              </div>
              <div className="rail__body prose">
                <p>{section.body}</p>
                {section.id === "ngagdra" ? <TextLink href="/centres/ngagdra-dorji-choegar">Ngagdra Dorji Choegar</TextLink> : null}
                {section.id === "eastern-bhutan" ? <TextLink href="/centres">Explore the centres</TextLink> : null}
              </div>
            </div>
          </section>
        );
      })}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(person) }} />
      <AboutPager current="/about/rinpoche" />
    </>
  );
}
