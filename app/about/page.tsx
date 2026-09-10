import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About the Institute", "Ngagdra Dorji Choegar was founded in Kurizampa in 2007 for advanced Vajrayana study and preparation before retreat.", "/about");

export default function AboutPage() {
  return (
    <>
      <section className="about-masthead container">
        <div className="about-masthead__copy"><p className="eyebrow">About the institute</p><h1>A permanent home for study.</h1><p>Founded at Kurizampa on 26 April 2007, Ngagdra Dorji Choegar provides advanced Vajrayana education, oral transmission and practical preparation before extended retreat.</p><dl><div><dt>Founded</dt><dd>26 April 2007</dd></div><div><dt>Location</dt><dd>Kurizampa · Mongar</dd></div></dl></div>
        <EditorialImage src="/media/institution/ngagdra-kurizampa.png" alt="Ngagdra Dorji Choegar buildings on the hillside above Kurizampa" caption="Ngagdra Dorji Choegar, Kurizampa, Mongar." priority sizes="(max-width: 760px) 100vw, 58vw" aspect="3 / 2" objectPosition="58% 50%" className="about-masthead__place" />
      </section>

      <section className="about-record paper-band"><div className="container about-record__grid"><div className="about-record__rail"><header><p className="eyebrow">Institutional record</p><h2>From travelling teachings to a permanent institute.</h2></header><EditorialImage src="/media/institution/ngagdra-development-2006-2020.jpg" alt="Two views recording the development of Ngagdra between 2006 and 2020" caption="The Ngagdra site before construction and after its development, 2006–2020." sizes="(max-width: 760px) calc(100vw - 40px), 34vw" aspect="1 / 1" objectFit="contain" className="about-record__image" /></div><div className="about-record__entries"><article><time>c. 1989–2007</time><div><h3>Travelling teachings</h3><p>For about eighteen years, groups of fifteen to twenty-five monks gathered at different locations for approximately three months of empowerments, oral transmissions and initiations.</p></div></article><article><time>26 April 2007</time><div><h3>Foundation at Kurizampa</h3><p>A permanent institute was founded above the Kurichu River, bringing teaching and retreat preparation into one place.</p></div></article><article><time>30 October 2015</time><div><h3>Consecration</h3><p>H.H. the 70th Je Khenpo, Trulku Jigme Choedra, consecrated Ngagdra and its Hey Vajra statue, attended by Their Royal Highnesses Gyaltshab Jigme Dorji Wangchuck and Azhi Yeatso Lhamo.</p></div></article></div></div></section>

      <section className="container about-campus section-pad"><div><p className="eyebrow">The campus</p><h2>Study, assembly and residence.</h2></div><div className="about-campus__facts"><article><h3>Places at Ngagdra</h3><p>The institute includes Rinpoche’s residence, the Hey Vajra temple, the Dharma Assembly Hall, monks’ dormitories, classrooms and a library.</p></article><article><h3>Learning and retreat</h3><p>Studies include Mantra, Sutra, sciences, astrology, mandala studies, English and advanced Vajrayana teaching. Practitioners may return after retreat for further instruction.</p></article></div></section>

      <section className="container about-explore section-pad"><div className="section-heading"><p className="eyebrow">Explore the institution</p><h2>Leadership, lineage and heritage.</h2></div><div className="link-panels"><Link href="/about/rinpoche"><h3>H.E. Gyeltshen Trulku Rinpoche</h3><p>A chronological biography of training, retreat and institutional work.</p></Link><Link href="/about/history"><h3>Lineage &amp; History</h3><p>Thruelzhig Gyeltshen Marpo and the transmission tradition.</p></Link><Link href="/about/heritage"><h3>Heritage</h3><p>Hey Vajra, sacred arts and the continuation of teachings.</p></Link><Link href="/about/milestones"><h3>Milestones</h3><p>Key events from 1875 to the recent retreat network.</p></Link></div></section>
    </>
  );
}
