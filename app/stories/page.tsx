import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { stories } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Stories", "Institute life, teachings, people, heritage and stories from Ngagdra Dorji Choegar and its retreat network.", "/stories");

export default function Page() {
  const [featured, ...secondary] = stories;
  const principal = secondary.slice(0, 2);
  const briefs = secondary.slice(2);
  return (
    <>
      <header className="journal-header container"><p className="eyebrow">Stories and updates</p><div><h1>From the institution.</h1><p>Documented history, lineage, people and practice from Ngagdra and the retreat network.</p></div><ul className="journal-header__subjects" aria-label="Story subjects"><li>Institute life</li><li>Teachings &amp; reflections</li><li>People</li><li>Retreat centres</li><li>Heritage</li></ul></header>
      <section className="container journal-feature"><Link href={`/stories/${featured.slug}`}><div className="journal-feature__copy"><p className="eyebrow">Featured story · {featured.category} · {featured.readTime}</p><h2>{featured.title}</h2><p>{featured.dek}</p><span>Read story →</span></div><EditorialImage {...featured.image} priority sizes="(max-width: 980px) calc(100vw - 48px), 62vw" aspect="16 / 10" className="journal-feature__image" /></Link></section>
      <section id="journal-index" className="container journal-secondary"><div className="journal-secondary__heading"><p className="eyebrow">More from the institution</p><span>{secondary.length} further stories</span></div><div className="journal-principal">{principal.map((story) => <Link href={`/stories/${story.slug}`} key={story.slug} className="journal-story"><EditorialImage {...story.image} sizes="(max-width: 680px) calc(100vw - 40px), 42vw" aspect="4 / 3" /><p className="eyebrow">{story.category} · {story.readTime}</p><h2>{story.title}</h2><p>{story.dek}</p><span>Read story →</span></Link>)}</div>{briefs.length ? <div className="journal-briefs">{briefs.map((story) => <Link href={`/stories/${story.slug}`} key={story.slug}><p className="eyebrow">{story.category} · {story.readTime}</p><h2>{story.title}</h2><p>{story.dek}</p><span>Read story →</span></Link>)}</div> : null}</section>
    </>
  );
}
