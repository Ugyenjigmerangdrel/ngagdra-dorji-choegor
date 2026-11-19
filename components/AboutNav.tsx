import Link from "next/link";
import { Closer } from "@/components/Closer";

// Labels follow the About document's own index ("Who we are", "Our lineage", "Our vision", "Our founder").
// `image` is the photograph shown behind a chapter's name when it is the next step; chapters with only archival or composite pictures have none.
export const aboutPages: { href: string; label: string; cta?: string; image?: { src: string; objectPosition?: string } }[] = [
  { href: "/about", label: "Who we are", cta: "Discover Ngagdra", image: { src: "/media/education/ngagdra-monks.jpg", objectPosition: "50% 20%" } },
  { href: "/about/rinpoche", label: "Our founder", cta: "Read the biography", image: { src: "/media/rinpoche/with-nuns.jpg", objectPosition: "50% 40%" } },
  { href: "/about/history", label: "Our lineage" },
  { href: "/about/heritage", label: "Our vision", image: { src: "/media/heritage/ritual-assembly.jpg", objectPosition: "56% 50%" } },
  { href: "/about/milestones", label: "Milestones" },
];
const items = aboutPages;

/** Local navigation shared by every About page. */
export function AboutNav({ current }: { current: string }) {
  return (
    <nav className="subnav" aria-label="A tradition carried through generations">
      <div className="container">
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={item.href === current ? "page" : undefined}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/** Previous / next chapter at the foot of every About page. */
export function AboutPager({ current }: { current: string }) {
  const index = items.findIndex((item) => item.href === current);
  const previous = items[index - 1];
  const next = items[index + 1];
  const back = previous ? { href: previous.href, label: "Previous chapter", title: previous.label } : undefined;
  // The last chapter has no next step, so its closer leads back to the chapter before it.
  if (!next) return previous ? <Closer ariaLabel="About chapters" href={previous.href} label="Previous chapter" title={previous.label} cta={previous.cta ?? "Read chapter"} image={previous.image} /> : null;
  return <Closer ariaLabel="About chapters" href={next.href} label="Next chapter" title={next.label} cta={next.cta ?? "Read chapter"} image={next.image} back={back} />;
}
