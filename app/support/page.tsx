import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Support the Institute", "Learn what support can sustain at Ngagdra Dorji Choegar, from education and retreat practice to preservation and essential facilities.", "/support");
const areas = [["Education", "Teaching spaces, study materials and the daily needs of practitioners."], ["Retreat practice", "Retreat houses and the conditions needed for sustained practice."], ["Preservation", "Buddhist texts, oral transmission, sacred arts and living practice traditions."], ["Infrastructure", "Accommodation, water, sanitation, kitchens, access routes and essential facilities."], ["Where most needed", "Support directed by the institute to its most immediate responsibility."]];

export default function Page() {
  return (
    <>
      <header className="container support-hero"><p className="eyebrow">Support</p><div><h1>Contribute to the work.</h1><p className="lead">Support sustains Vajrayana education, retreat practice, living traditions and the essential places in which they continue.</p></div></header>
      <section className="container support-evidence"><EditorialImage src="/media/centres/gawa-mani-chorten-construction.jpg" alt="Community members working around the Gawa Mani chorten during construction" caption="Communal work during construction of the Gawa Mani chorten." priority sizes="(max-width: 680px) calc(100vw - 40px), 70vw" aspect="16 / 9" objectPosition="50% 50%" /><div><p className="eyebrow">Why support matters</p><p>Contributions are practical: they support people, buildings, study and long periods of retreat across Ngagdra’s institutional network.</p></div></section>
      <section className="paper-band support-areas-section"><div className="container support-areas-layout"><header><p className="eyebrow">What support sustains</p><h2>Five areas of responsibility.</h2></header><div className="support-areas">{areas.map(([title, body], index) => <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></div></section>
      <section id="contribution" className="support-action"><div className="container support-action__grid"><div><p className="eyebrow">Contribution guidance</p><h2>Confirm arrangements before sending funds.</h2></div><div><p>The institute publication records education, retreat houses, texts, sacred arts and essential facilities across the network. The institute determines where support is directed according to current need.</p><p>Direct contribution details are not yet published on this website.</p><Link className="button button--light" href="/visit#visitor-information">Visit and contact guidance <span>→</span></Link></div></div></section>
    </>
  );
}
