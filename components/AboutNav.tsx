import Link from "next/link";

// Labels follow the About document's own index ("Who we are", "Our lineage", "Our vision", "Our founder").
export const aboutPages = [
  { href: "/about", label: "Who we are" },
  { href: "/about/rinpoche", label: "Our founder" },
  { href: "/about/history", label: "Our lineage" },
  { href: "/about/heritage", label: "Our vision" },
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
  return (
    <nav className="container pager-wrap" aria-label="About chapters">
      <div className="pager">
        {previous ? <Link href={previous.href}><span>Previous</span><strong>{previous.label}</strong></Link> : <span />}
        {next ? <Link href={next.href}><span>Next</span><strong>{next.label}</strong></Link> : <span />}
      </div>
    </nav>
  );
}
