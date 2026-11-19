"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/**
 * A row of years (or periods) that stays under the site header while its section is read,
 * marking the one currently on screen. Each item links to the element with its id.
 */
export function YearRail({ items, label, className = "" }: { items: Item[]; label: string; className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = items.map((item) => document.getElementById(item.id)).filter((element) => element !== null);
    if (!targets.length) return;
    // The current item is the last one whose top has passed a line a third of the way down the screen.
    const update = () => {
      const line = window.innerHeight * 0.34;
      let current: string | null = null;
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= line) current = target.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav className={`year-rail ${className}`.trim()} aria-label={label}>
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>{item.label}</a>
      ))}
    </nav>
  );
}
