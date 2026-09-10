import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProseSection } from "@/components/ProseSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Heritage", "Hey Vajra, sacred arts, Buddhist texts and practice traditions documented at Ngagdra and its retreat network.", "/about/heritage");

export default function Page() { return <>
  <PageHero variant="archive" eyebrow="Heritage" title="Teachings and sacred arts maintained through practice." intro="Ngagdra and its retreat network study and transmit teachings through oral transmission, texts, contemplation, ritual and extended retreat. The publication also records major sacred artworks at several centres." image={{ src: "/media/heritage/ritual-assembly.jpg", alt: "Practitioners gathered for a ritual assembly inside a decorated hall", priority: true, sizes: "(max-width: 980px) calc(100vw - 48px), 42vw", aspect: "4 / 3", objectPosition: "58% 50%" }} />
  <ProseSection eyebrow="Ngagdra" title="Hey Vajra"><p>The institute houses a major statue of Hey Vajra, identified by the publication as a principal meditative deity associated with Marpa Lotsawa.</p><p>H.H. the 70th Je Khenpo, Trulku Jigme Choedra, formally consecrated the statue and institute on 30 October 2015. His Royal Highness Gyaltshab Jigme Dorji Wangchuck attended with Her Royal Highness Azhi Yeatso Lhamo.</p></ProseSection>
  <section className="container section-pad"><div className="section-heading"><p className="eyebrow">Across the network</p><h2>Works documented by the publication.</h2></div><div className="heritage-grid">
    <article><p className="eyebrow">Togden Choeling</p><h3>Three-dimensional Chakrasamvara mandala</h3><p>The mandala is housed in the temple at the Gongthung retreat centre.</p></article>
    <article><p className="eyebrow">Khabti</p><h3>Dampa Rigja wall painting</h3><p>The work depicts deities visualized during an intensive period within the retreat programme.</p></article>
    <article><p className="eyebrow">Khabti</p><h3>Longevity Buddha mandala</h3><p>A three-dimensional mandala is housed in the Khesar Namgyel Choeling temple.</p></article>
    <article><p className="eyebrow">Ngagdra</p><h3>Buddhist texts</h3><p>The institute library holds Buddhist texts used in study and training.</p></article>
  </div></section>
  <ProseSection eyebrow="Living transmission" title="How practices continue"><p>Rinpoche’s work with Drukpa Kagyud and Nyingma teachings includes Gayjor Duenpa and Guru Dewa. Teachings are explained, received through oral transmission, practised, documented through commentaries and manuals, and continued in retreat.</p><Link className="text-link" href="/our-work/preserving-living-traditions">How traditions are continued →</Link></ProseSection>
</>; }
