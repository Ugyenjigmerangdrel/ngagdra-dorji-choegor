import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { centres } from "@/lib/centres";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Centres", "Explore the institutes, monasteries, nunneries and retreat centres documented in the Ngagdra publication.", "/centres");

export default function Page() {
  const hub = centres.find((centre) => centre.hub)!;
  const network = centres.filter((centre) => !centre.hub);
  const districts = [...new Set(network.map((centre) => centre.district))].sort();
  return <>
    <section className="centres-masthead"><div className="container centres-masthead__grid"><div><p className="eyebrow">Centres</p><h1>A retreat network across Bhutan.</h1><p className="lead">Ngagdra is the educational centre of a network of monasteries, nunneries and Drubdeys formed through lineage, teaching and community stewardship.</p></div><div className="centres-masthead__region"><span>Primary region</span><strong>Eastern Bhutan</strong><small>Mongar · Tashigang · Trashiyangtse · Lhuentse · Pemagatshel · Samdrup Jongkhar</small></div></div><EditorialImage src="/media/centres/retreat-centres.jpg" alt="Retreat buildings on a forested hillside in Bhutan" caption="Retreat houses set within the forested landscape of Eastern Bhutan." priority sizes="100vw" aspect="21 / 8" objectPosition="50% 48%" className="centres-masthead__image" /></section>
    <section className="container centres-hub section-pad"><div><p className="eyebrow">Network hub · {hub.locality}, {hub.district}</p><h2>{hub.name}</h2><p>{hub.intro}</p><Link className="text-link" href={`/centres/${hub.slug}`}>Institute profile →</Link></div></section>
    <section className="paper-band centres-directory-section section-pad"><div className="container centres-directory-header"><div><p className="eyebrow">Directory by district</p><h2>{network.length} centres in {districts.length} districts.</h2></div><p>Browse the historical network by place. Individual records include foundation dates, lineage connections, practice communities and sacred features.</p></div><nav className="container district-index" aria-label="Jump to a district">{districts.map((district) => <a key={district} href={`#district-${district.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{district}<span>{network.filter((centre) => centre.district === district).length}</span></a>)}</nav><div className="container centre-directory">{districts.map((district) => { const districtCentres = network.filter((centre) => centre.district === district); return <section className="centre-district" id={`district-${district.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={district}><header><h3>{district}</h3><span>{districtCentres.length} {districtCentres.length === 1 ? "centre" : "centres"}</span></header><div>{districtCentres.map((centre) => <Link href={`/centres/${centre.slug}`} key={centre.slug}><div><h4>{centre.name}</h4>{centre.alternativeName ? <small>{centre.alternativeName}</small> : null}</div><p>{centre.locality}</p><b>{centre.type}</b><span aria-hidden="true">→</span></Link>)}</div></section>; })}</div></section>
  </>;
}
