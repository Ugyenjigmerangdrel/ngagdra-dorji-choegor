import Link from "next/link";
import { breadcrumbJsonLd, jsonLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

/** Visible trail plus BreadcrumbList structured data. The last crumb is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          {trail.map((item, index) => (
            <li key={item.path}>
              {index === trail.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd(trail)) }} />
    </>
  );
}
