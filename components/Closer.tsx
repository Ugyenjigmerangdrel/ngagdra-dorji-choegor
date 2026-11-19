import { fillSizes } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";

type CloserProps = {
  /** Accessible name of the navigation, e.g. "More centres". */
  ariaLabel: string;
  href: string;
  /** Small label above the title; omit it when the button already says it. */
  label?: string;
  title: string;
  cta: string;
  /** A photograph of the destination. Without one the closer sits on the brand ground. */
  image?: { src: string; objectPosition?: string };
  /** A quiet second route, e.g. the previous page in a sequence. */
  back?: { href: string; label: string; title: string };
};

/** The ending of a long-form page: one large onward step, over a photograph where the destination has one. */
export function Closer({ ariaLabel, href, label, title, cta, image, back }: CloserProps) {
  return (
    <nav className={`closer${image ? " closer--photo" : ""}`} aria-label={ariaLabel}>
      {image ? <Image quality={90} src={image.src} alt="" fill sizes={fillSizes} style={{ objectFit: "cover", objectPosition: image.objectPosition ?? "50% 50%" }} /> : null}
      <Link href={href} className="closer__link">
        {label ? <span className="eyebrow">{label}</span> : null}
        <span className="closer__title">{title}</span>
        <span className="button button--light">{cta}<Arrow /></span>
      </Link>
      {back ? <Link href={back.href} className="closer__back"><span>{back.label}</span>{back.title}</Link> : null}
    </nav>
  );
}
