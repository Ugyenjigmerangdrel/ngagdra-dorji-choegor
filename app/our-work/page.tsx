import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { workPillars } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Our Work", "Explore Ngagdra Dorji Choegar’s work in education, retreat preparation, living heritage, sacred arts and public practice.", "/our-work");

export default function Page() {
  const education = workPillars[0];
  const retreat = workPillars[1];
  const stewardship = workPillars.slice(2);
  return (
    <>
      <header className="container work-page-header"><p className="eyebrow">Our work</p><div><h1>Five areas of practice and service.</h1><p className="lead">Ngagdra prepares practitioners for extended retreat, transmits teachings, maintains sacred knowledge and supports public religious practice.</p></div></header>
      <EditorialImage src="/media/heritage/ritual-assembly.jpg" alt="Practitioners gathered for a ritual assembly" caption="Ritual assembly within the living practice tradition." priority sizes="(max-width: 980px) 100vw, 1200px" aspect="16 / 7" objectPosition="56% 50%" className="work-page-image" />
      <section id="work-system" className="paper-band work-system" aria-labelledby="work-system-title">
        <div className="container work-system__layout">
          <header><p className="eyebrow">The practitioner path</p><h2 id="work-system-title">Study moves into retreat—and returns as continuing practice.</h2><p>Education and retreat preparation form one continuous path. Preservation, sacred knowledge and public practice carry its responsibilities into the wider network.</p></header>
          <div className="work-core-path" aria-label="Practitioner pathway">
            <Link href={`/our-work/${education.slug}`}><span>At Ngagdra</span><h3>{education.shortTitle}</h3><p>{education.dek}</p><b>Explore education →</b></Link>
            <Link href={`/our-work/${retreat.slug}`}><span>Across the Drubdeys</span><h3>{retreat.shortTitle}</h3><p>{retreat.dek}</p><b>Explore retreat preparation →</b></Link>
          </div>
        </div>
      </section>
      <section className="container work-responsibilities section-pad"><header><p className="eyebrow">Responsibilities carried through both</p><h2>Preservation, knowledge and public practice.</h2></header><div>{stewardship.map((pillar) => <Link href={`/our-work/${pillar.slug}`} key={pillar.slug}><span>{pillar.index}</span><div><h3>{pillar.shortTitle}</h3><p>{pillar.dek}</p></div><b>View area →</b></Link>)}</div></section>
      <section className="container work-documentation section-pad"><div><p className="eyebrow">Retreat preparation</p><h2>Instruction continues beyond the classroom.</h2><p>Study at Ngagdra leads into three-, six- and nine-year retreats according to the practitioner and centre, followed by further teaching and service.</p><Link className="text-link" href="/our-work/retreat-preparation-practice">Follow the practitioner path →</Link></div><EditorialImage src="/media/rinpoche/with-retreat-practitioners.jpg" alt="H.E. Gyeltshen Trulku Rinpoche with retreat practitioners" caption="H.E. Gyeltshen Trulku Rinpoche with practitioners." sizes="(max-width: 680px) calc(100vw - 40px), 34vw" aspect="3 / 4" objectPosition="50% 42%" /></section>
    </>
  );
}
