import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import type { ReactNode } from "react";
import type { StoryBlock } from "@/lib/centres";

/** Eyebrow, title, optional intro and action: the one section heading used site-wide. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  action,
  as: Heading = "h2",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string | string[];
  action?: { label: string; href: string };
  as?: "h2" | "h3";
  id?: string;
}) {
  const intros = intro === undefined ? [] : Array.isArray(intro) ? intro : [intro];
  return (
    <div className="section-head">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading id={id}>{title}</Heading>
      {intros.map((text) => <p key={text}>{text}</p>)}
      {action ? <TextLink href={action.href}>{action.label}</TextLink> : null}
    </div>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link className={`text-link ${className}`.trim()} href={href}>
      {children}<Arrow />
    </Link>
  );
}

/**
 * A story or record teaser. Without an href it renders as a plain item marked
 * "In preparation", so the index never links to a page that does not exist yet.
 */
export function Teaser({
  title,
  text,
  meta,
  href,
  cta = "Read story",
  media,
  as: Heading = "h3",
}: {
  title: string;
  text: string | string[];
  meta?: string;
  href?: string;
  cta?: string;
  media?: ReactNode;
  as?: "h2" | "h3";
}) {
  const texts = Array.isArray(text) ? text : [text];
  const body = (
    <>
      {media}
      {meta ? <p className="teaser__meta">{meta}</p> : null}
      <Heading className="teaser__title">{title}</Heading>
      {texts.map((line) => <p className="teaser__text" key={line}>{line}</p>)}
      {href ? <span className="cue">{cta}<Arrow /></span> : <span className="cue cue--pending">In preparation</span>}
    </>
  );
  return href ? <Link className="teaser teaser--link" href={href}>{body}</Link> : <div className="teaser">{body}</div>;
}

/**
 * Stories announced in the content documents but not yet written. They are listed once, compactly,
 * under a single "In preparation" label instead of each carrying its own marker.
 */
export function PendingList({ items, label = "In preparation" }: { items: { title: string; text: string | string[]; meta?: string }[]; label?: string }) {
  return (
    <div className="pending">
      <p className="pending__label">{label}</p>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            {item.meta ? <span className="pending__meta">{item.meta}</span> : null}
            <strong>{item.title}</strong>
            <span className="pending__text">{Array.isArray(item.text) ? item.text.join(" ") : item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Numbered horizontal sequence: the practitioner journey and the life of the tradition. */
export function Steps({ steps, label }: { steps: { title: string; body: string }[]; label: string }) {
  return (
    <ol className="steps" aria-label={label} style={{ ["--steps" as string]: steps.length }}>
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Renders ordered story content: paragraphs, bulleted lists and term pairs. */
export function StoryBlocks({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (typeof block === "string") return <p key={index}>{block}</p>;
        if ("list" in block) return <ul key={index}>{block.list.map((item) => <li key={item}>{item}</li>)}</ul>;
        return (
          <dl className="pairs" key={index}>
            {block.pairs.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
        );
      })}
    </>
  );
}

export function Stats({ items, className = "" }: { items: { value: string; label: string; text?: string }[]; className?: string }) {
  return (
    <dl className={`stats ${className}`.trim()}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd className="stats__value">{item.value}</dd>
          {item.text ? <dd className="stats__text">{item.text}</dd> : null}
        </div>
      ))}
    </dl>
  );
}
