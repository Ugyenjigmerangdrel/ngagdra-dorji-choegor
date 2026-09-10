import type { ReactNode } from "react";
import { EditorialImage, type EditorialImageProps } from "@/components/EditorialImage";

type ContainerElement = "div" | "section" | "header" | "nav";

export function PageContainer({
  as: Element = "div",
  className = "",
  children,
}: {
  as?: ContainerElement;
  className?: string;
  children: ReactNode;
}) {
  return <Element className={`page-container ${className}`.trim()}>{children}</Element>;
}

export function InstitutionalHero({
  eyebrow,
  accent,
  title,
  intro,
  image,
  home = false,
}: {
  eyebrow: string;
  accent?: ReactNode;
  title: ReactNode;
  intro: string;
  image?: EditorialImageProps;
  home?: boolean;
}) {
  return (
    <section className={`institutional-hero${home ? " institutional-hero--home" : ""}`}>
      <PageContainer className="institutional-grid institutional-hero__grid">
        <div className="institutional-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          {accent ? <div className="institutional-hero__accent">{accent}</div> : null}
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
        </div>
        {image ? <EditorialImage {...image} className={`institutional-hero__image ${image.className ?? ""}`.trim()} /> : null}
      </PageContainer>
    </section>
  );
}

export function InstitutionalSplit({
  children,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`institutional-grid institutional-split${reverse ? " institutional-split--reverse" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function LeadershipProfile({
  eyebrow,
  name,
  role,
  biography,
  image,
  facts,
  action,
}: {
  eyebrow: string;
  name: string;
  role: string;
  biography: ReactNode;
  image: EditorialImageProps;
  facts?: Array<{ label: string; value: string }>;
  action?: ReactNode;
}) {
  return (
    <article className="institutional-grid leadership-profile">
      <EditorialImage {...image} className={`leadership-profile__portrait ${image.className ?? ""}`.trim()} />
      <div className="leadership-profile__body">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{name}</h2>
        <p className="leadership-profile__role">{role}</p>
        <div className="leadership-profile__biography">{biography}</div>
        {facts?.length ? (
          <dl className="leadership-profile__facts">
            {facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          </dl>
        ) : null}
        {action}
      </div>
    </article>
  );
}
