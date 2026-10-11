import Link from "next/link";
import { Arrow } from "@/components/Arrow";

const steps = [
  { href: "/centres", label: "Explore the centres" },
  { href: "/events", label: "Explore the chronicle" },
  { href: "/visit", label: "Plan a visit" },
  { href: "/support", label: "Support Ngagdra" },
];

/** The shared ending of every main page: the same four onward routes, minus the page you are on. */
export function NextSteps({ exclude }: { exclude?: string }) {
  return (
    <nav className="next-steps" aria-label="Continue">
      <div className="container">
        <ul>
          {steps.filter((step) => step.href !== exclude).map((step) => (
            <li key={step.href}><Link href={step.href}>{step.label}<Arrow /></Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
