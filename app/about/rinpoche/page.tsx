import { EditorialImage } from "@/components/EditorialImage";
import { PageHero } from "@/components/PageHero";
import { pageMetadata, jsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const biography = [
  ["1953 · Early life", "His Eminence Drub-La Kuenzang Tenpai Gyeltshen, widely known as H.E. Gyeltshen Trulku Rinpoche, was born in Tashi Yangtse in Eastern Bhutan. He lost both parents at a young age."],
  ["Age nine · Recognition", "Drubwang Lama Sonam Zangpo recognized him as the reincarnation of Thruelzhig Gyeltshen Marpo and enthroned him in Lhuentse."],
  ["Age twelve · Darjeeling", "Rinpoche travelled to Druk Thupten Sangag Choling in Darjeeling. He studied Sutra and Mantra for ten years under the First Drukpa Thuksey Rinpoche and Khenpo Noryang and was appointed Dorji Lopen at about nineteen."],
  ["Teachings received", "The publication records the Kangyur oral transmission and Rinchen Tordzoe from H.H. Dudjom Jigdrel Yeshi Dorji, Great Perfection teachings from the 68th Je Khenpo, Thrizur Tenzin Dendrup, and Togden Shakya Shri's collected teachings from Drubwang Adzin Rinpoche."],
  ["Age twenty-three · Retreat", "After returning to Bhutan, Rinpoche received Mahamudra, the Six Yogas of Naropa, and Drukpa Kagyud and Nyingma transmissions from Drubwang Lama Sonam Zangpo. He entered strict retreat at Hongtsho Goenpa and trained in Mahamudra, the Six Yogas of Naropa and Khandro Nyengyue, the whispered lineage of the Dakinis."],
  ["1982 · Phajoding", "Rinpoche was appointed the first Drubpoen, or meditation master, of the official Buddhist Institute and Retreat Center at Phajoding. A three-year retreat programme was completed under his guidance."],
  ["1985 · Hongtsho", "Rinpoche initiated another three-year retreat programme at Hongtsho Goenpa."],
  ["From about age thirty-four · Eastern Bhutan", "Rinpoche expanded his Dharma activity across Eastern Bhutan, beginning at Kangpar Lamai Goenpa. The publication describes his Rimay approach, which maintained different teaching lineages without combining their distinct instructions."],
  ["Institutional work", "The publication credits Rinpoche with constructing or renovating more than fifteen retreat centres, seven monasteries and a nunnery. It also records his support for equal opportunity in spiritual education and practice for monks and nuns."],
  ["2007 · Ngagdra", "Rinpoche founded Ngagdra Dorji Choegar as an Institute for Vajrayana Studies and preparation before retreat."],
  ["28 December 2009 · Yogic Daken", "During the Moenlam Chenmo in Tashigang, H.H. the 70th Je Khenpo, Trulku Jigme Choedra, conferred the title recorded by the publication as ‘The Great Illuminator of the Sacred Buddhist Doctrine of Bhutan.’"],
];

export const metadata = pageMetadata("H.E. Gyeltshen Trulku Rinpoche", "A chronological biography of H.E. Gyeltshen Trulku Rinpoche, founder of Ngagdra Dorji Choegar.", "/about/rinpoche");

export default function RinpochePage() { const person = { "@context": "https://schema.org", "@type": "Person", name: "H.E. Gyeltshen Trulku Rinpoche", birthDate: "1953", birthPlace: "Tashi Yangtse, Bhutan", affiliation: { "@id": `${site.url}/#organization` }, url: `${site.url}/about/rinpoche` }; return <>
  <PageHero variant="archive" eyebrow="Founder and Spiritual Teacher" title="H.E. Gyeltshen Trulku Rinpoche" intro="Born in Tashi Yangtse in 1953, H.E. Gyeltshen Trulku Rinpoche trained in Sutra, Mantra and extended retreat before directing retreat programmes and institutions across Eastern Bhutan." image={{ src: "/media/rinpoche/portrait-archive.jpg", alt: "Archival seated portrait of H.E. Gyeltshen Trulku Rinpoche", caption: "Archival portrait of H.E. Gyeltshen Trulku Rinpoche.", priority: true, sizes: "(max-width: 680px) calc(100vw - 80px), (max-width: 980px) 520px, 38vw", aspect: "4 / 5", objectFit: "contain" }} />
  <section className="container biography-list section-pad">{biography.map(([title, body]) => <article key={title}><div><h2>{title}</h2><p>{body}</p></div></article>)}</section>
  <section className="paper-band section-pad"><div className="container network-grid"><EditorialImage src="/media/rinpoche/with-nuns.jpg" alt="H.E. Gyeltshen Trulku Rinpoche seated with Buddhist nuns" sizes="(max-width: 980px) calc(100vw - 48px), 46vw" aspect="3 / 2" /><div><p className="eyebrow">Equality in practice</p><h2>Education and retreat for monks and nuns.</h2><p className="lead">{"The publication records Rinpoche's advocacy for equal opportunity and treatment in spiritual education and practice. His work at Jashar Woong and Khabti supported education and long retreat for nuns."}</p></div></div></section>
  <section className="container section-pad quote-section"><blockquote>“Until now, I have been serving the Buddha Dharma through the three wheels: the wheel of daily activities, the wheel of hearing and contemplation, and the wheel of meditation/Renunciation. These three wheels have been turning continuously for the benefit of all sentient beings.”</blockquote><cite>H.E. Gyeltshen Trulku Rinpoche, as recorded on page 39 of the institute publication</cite></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(person) }} />
</>; }
