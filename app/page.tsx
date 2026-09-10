import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { InstitutionalHero, InstitutionalSplit, LeadershipProfile, PageContainer } from "@/components/InstitutionalLayout";
import { eventPhotography, stories } from "@/lib/content";

const journey = [
  ["Study", "Advanced Vajrayana study · Oral transmission · Mantra · Sutra · Mandala · Astrology · Contemplation"],
  ["Prepare", "Practical and spiritual preparation for retreat"],
  ["Retreat", "Three, six, nine and longer programmes, depending on the practitioner and centre"],
  ["Return and continue", "Further teachings and instructions at Ngagdra · Advanced retreat · Service at monasteries and nunneries · Further practice"],
];

export default function HomePage() {
  return (
    <>
      <InstitutionalHero
        home
        eyebrow="Kurizampa · Mongar · Eastern Bhutan"
        accent={
          <span className="inline-flex h-1 origin-left overflow-hidden rounded-full animate-draw-x w-20" aria-hidden="true">
            <span className="h-full bg-maroon w-10"></span>
            <span className="h-full bg-saffron w-4"></span>
            <span className="h-full bg-rausch w-14"></span>
            <span className="h-full bg-saffron w-2"></span>
            <span className="h-full bg-jade w-8"></span>
            <span className="h-full bg-maroon w-3"></span>
            <span className="h-full bg-saffron w-16"></span>
          </span>
        }
        title="A place for study, transmission and practice."
        intro="Ngagdra Dorji Choegar is a Buddhist institute continuing a living Vajrayana tradition through education, oral transmission and preparation for extended retreat."
        image={{
          src: "/media/institution/ngagdra-kurizampa.png",
          alt: "Ngagdra Dorji Choegar on the hillside above Kurizampa, Mongar",
          caption: "Ngagdra Dorji Choegar, Kurizampa, Mongar, Eastern Bhutan.",
          priority: true,
          sizes: "(max-width: 760px) calc(100vw - 32px), 58vw",
          aspect: "3 / 2",
          objectPosition: "53% 50%",
        }}
      />

      <section className="container home-foundation section-pad">
        <div className="home-foundation__fact"><strong>18 years</strong><span>of travelling teachings before a permanent home</span></div>
        <div className="home-foundation__copy"><p className="eyebrow">The origin of the institute</p><h2>Why Ngagdra was established</h2><p>Before Ngagdra had a permanent home, practitioners gathered at different locations each year to receive teachings, empowerments and oral transmissions from Rinpoche. This continued for eighteen years.</p><p>In 2007, Ngagdra Dorji Choegar was established in Kurizampa so this training could take place in one dedicated institute, before practitioners entered longer periods of retreat.</p><Link className="text-link" href="/stories/why-ngagdra-was-established">Read the foundation story →</Link></div>
      </section>

      <section className="paper-band home-work section-pad">
        <div className="container home-work__layout">
          <header><p className="eyebrow">What happens here</p><h2>Study gives practice its foundation.</h2><p>Advanced Vajrayana education, oral transmission and practical preparation lead toward sustained retreat.</p><Link className="text-link" href="/our-work">Explore all areas of work →</Link></header>
          <ol className="home-work__sequence">{journey.map(([stage, label]) => <li key={stage}><h3>{stage}</h3><p>{label}</p></li>)}</ol>
        </div>
        <div className="container home-work__outcomes"><div><h3>Preserve</h3><p>Teachings, commentaries, practice traditions and sacred arts continue through careful study and transmission.</p></div><div><h3>Serve</h3><p>Practitioners return to support monasteries, nunneries, retreat communities and selected public religious practices.</p></div><Link className="text-link" href="/our-work/retreat-preparation-practice">Understand retreat preparation →</Link></div>
      </section>

      <section className="institutional-section home-network">
        <PageContainer>
          <InstitutionalSplit className="home-network__primary">
            <div className="institutional-split__copy"><p className="eyebrow">Retreat network</p><h2>Institutes, monasteries, nunneries and Drubdeys.</h2><p>Eighteen sites are connected through lineage, teaching, community stewardship and extended practice. Ngagdra serves as the network’s educational centre.</p><Link className="text-link" href="/centres">Explore the centres →</Link></div>
            <EditorialImage src="/media/centres/retreat-centres.jpg" alt="Retreat buildings on a forested hillside in Bhutan" caption="Retreat houses connected by paths on a forested hillside in Eastern Bhutan." sizes="(max-width: 760px) calc(100vw - 32px), 58vw" aspect="3 / 2" objectPosition="50% 48%" />
          </InstitutionalSplit>
          <LeadershipProfile
            eyebrow="Institutional leadership"
            name="H.E. Gyeltshen Trulku Rinpoche"
            role="Founder and spiritual teacher"
            biography={<p>Born in Tashi Yangtse in 1953, Rinpoche trained in Sutra, Mantra, Mahamudra, the Six Yogas of Naropa and teachings of both the Drukpa Kagyud and Nyingma traditions. His work in Eastern Bhutan includes retreat centres, monasteries, a nunnery and Ngagdra.</p>}
            image={{ src: "/media/rinpoche/portrait-archive.jpg", alt: "Archival seated portrait of H.E. Gyeltshen Trulku Rinpoche", sizes: "(max-width: 760px) calc(100vw - 32px), 32vw", aspect: "4 / 5", objectFit: "contain", caption: "H.E. Gyeltshen Trulku Rinpoche, founder and spiritual teacher." }}
            facts={[{ label: "Born", value: "1953 · Tashi Yangtse" }, { label: "Traditions", value: "Drukpa Kagyud · Nyingma" }, { label: "Institution founded", value: "Ngagdra Dorji Choegar · 2007" }]}
            action={<Link className="text-link" href="/about/rinpoche">Read the biography →</Link>}
          />
        </PageContainer>
      </section>

      <section className="institutional-section home-public-practice">
        <PageContainer>
          <InstitutionalSplit reverse>
            <EditorialImage {...eventPhotography.congregationFront} sizes="(max-width: 700px) calc(100vw - 40px), 58vw" />
            <div className="institutional-split__copy"><p className="eyebrow">Community and public practice</p><h2>Practice shared with the wider community.</h2><p>Annual programmes bring teachers, practitioners and members of the public together at Ngagdra for religious teaching, prayer and ceremony.</p><Link className="text-link" href="/events">Explore practices and events →</Link></div>
          </InstitutionalSplit>
        </PageContainer>
      </section>

      <section className="container home-journal section-pad"><div className="section-heading"><p className="eyebrow">Updates and stories</p><h2>History, people and practice.</h2></div><div className="story-grid">{stories.slice(0, 3).map((story) => <Link className="story-card" href={`/stories/${story.slug}`} key={story.slug}><EditorialImage {...story.image} className="story-image" aspect="4 / 3" sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 980px) 50vw, 33vw" /><p className="eyebrow">{story.category}</p><h3>{story.title}</h3><p>{story.dek}</p><span>Read story →</span></Link>)}</div><Link className="text-link" href="/stories">View all stories →</Link></section>

      <section className="join-band home-next"><div className="container home-next__grid"><div><p className="eyebrow">Continue</p><h2>Meet the institution in person or support its work.</h2></div><nav aria-label="Ways to continue"><Link href="/visit"><span>Plan a visit</span><b>Location and visitor guidance →</b></Link><Link href="/events"><span>Practices and events</span><b>Annual practice and archive →</b></Link><Link href="/support"><span>Support Ngagdra</span><b>What contributions sustain →</b></Link></nav></div></section>
    </>
  );
}
