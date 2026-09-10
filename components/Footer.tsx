import Link from "next/link";
import { Mark } from "@/components/Mark";

const columns = [
  { title: "Institution", links: [["About", "/about"], ["Our Work", "/our-work"], ["Centres", "/centres"]] },
  { title: "Journal", links: [["Events", "/events"], ["Stories", "/stories"], ["RSS", "/rss.xml"]] },
  { title: "Visit & Support", links: [["Visit", "/visit"], ["Support", "/support"]] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-identity">
          <Mark />
          <p className="eyebrow">Established 26 April 2007</p>
          <h2>Ngagdra Dorji Choegar</h2>
          <p>Institute for Vajrayana Studies<br />Kurizampa · Mongar · Eastern Bhutan</p>
        </div>
        <div className="footer-links">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="eyebrow">{column.title}</p>
              {column.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ngagdra Dorji Choegar</span>
        <span>Study · Practice · Living tradition</span>
      </div>
    </footer>
  );
}
