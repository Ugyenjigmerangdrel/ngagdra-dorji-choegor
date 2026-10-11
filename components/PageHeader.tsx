import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { EditorialImage, type EditorialImageProps } from "@/components/EditorialImage";

type PageHeaderProps = {
  /** Optional label above the title. Omit it when the breadcrumb already names the page. */
  eyebrow?: string;
  title: ReactNode;
  lead?: string | string[];
  /** Short kicker set above the title, e.g. a section intro line from the source copy. */
  kicker?: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
  /** Quiet supporting column: key facts, an index or a note. */
  aside?: ReactNode;
  image?: EditorialImageProps;
  /** "side" sets the image beside the copy; "wide" runs it the full content width below. */
  imageLayout?: "side" | "wide";
  display?: boolean;
  /** Set the lead as an editorial standfirst (serif italic) rather than body copy. */
  dek?: boolean;
};

/**
 * The single header pattern for every page: eyebrow, title and lead on the left
 * seven columns, with either an aside, a side image or a wide image below.
 */
export function PageHeader({ eyebrow, title, lead, kicker, crumbs, actions, aside, image, imageLayout = "side", display = false, dek = false }: PageHeaderProps) {
  const leads = lead === undefined ? [] : Array.isArray(lead) ? lead : [lead];
  const side = image && imageLayout === "side";
  return (
    <header className={`page-header${display ? " page-header--display" : ""}${side ? " page-header--side" : ""}`}>
      <div className="container grid page-header__grid">
        <div className="page-header__copy">
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {kicker ? <p className="page-header__kicker">{kicker}</p> : null}
          <h1>{title}</h1>
          {leads.map((text, index) => <p className={index === 0 ? (dek ? "lead lead--dek" : "lead") : "page-header__more"} key={text}>{text}</p>)}
          {actions ? <div className="actions">{actions}</div> : null}
        </div>
        {aside ? <div className="page-header__aside">{aside}</div> : null}
        {side ? <EditorialImage {...image} className={`page-header__image ${image.className ?? ""}`.trim()} /> : null}
      </div>
      {image && imageLayout === "wide" ? (
        <div className="container page-header__wide">
          <EditorialImage {...image} />
        </div>
      ) : null}
    </header>
  );
}
