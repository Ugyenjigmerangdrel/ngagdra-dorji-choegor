import Link from "next/link";
import { Mark } from "@/components/Mark";

const columns = [
  { title: "Institute", links: [["Who we are", "/about"], ["Our founder", "/about/rinpoche"], ["Our lineage", "/about/history"], ["Our vision", "/about/heritage"], ["Our Work", "/our-work"]] },
  { title: "Network & Chronicle", links: [["Centres", "/centres"], ["Events", "/events"], ["Stories", "/stories"], ["RSS", "/rss.xml"]] },
  { title: "Participate", links: [["Visit", "/visit"], ["Support", "/support"]] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-identity">
          <Mark />
          <p className="eyebrow">Established 26 April 2007</p>
          <p className="footer-identity__name">Ngagdra Dorji Choegar</p>
          <p>Institute for Vajrayana Studies<br />Kurizampa · Mongar · Eastern Bhutan</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="eyebrow">{column.title}</p>
              {column.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ngagdra Dorji Choegar</span>
        <span>Study · Practice · Preserve · Serve</span>
        <a className="footer-top" href="#main">Back to top</a>
      </div>
    </footer>
  );
}
