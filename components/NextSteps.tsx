import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";

// Each route is shown over the documentary photograph its own page uses.
const steps = [
  { href: "/centres", label: "Explore the centres", image: { src: "/media/centres/retreat-centres.jpg", objectPosition: "50% 48%" } },
  { href: "/events", label: "Explore the chronicle", image: { src: "/media/events/public-practice-congregation-side.jpg", objectPosition: "50% 50%" } },
  { href: "/visit", label: "Plan a visit", image: { src: "/media/community/public-blessing.jpg", objectPosition: "43% 40%" } },
  { href: "/support", label: "Support Ngagdra", image: { src: "/media/centres/gawa-mani-chorten-construction.jpg", objectPosition: "50% 55%" } },
];

/** The shared ending of every main page: the same four onward routes, minus the page you are on, as photo panels. */
export function NextSteps({ exclude }: { exclude?: string }) {
  const shown = steps.filter((step) => step.href !== exclude);
  return (
    <nav className="next-steps" aria-label="Continue">
      <ul style={{ ["--panels" as string]: shown.length }}>
        {shown.map((step) => (
          <li key={step.href}>
            <Link href={step.href}>
              <Image quality={90} src={step.image.src} alt="" fill sizes={`(max-width: 700px) 100vw, (max-width: 1100px) 80vw, ${Math.round(200 / shown.length)}vw`} style={{ objectFit: "cover", objectPosition: step.image.objectPosition }} />
              <span className="next-steps__label">{step.label}<Arrow /></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
