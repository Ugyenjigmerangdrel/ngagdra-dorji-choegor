"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A whole number that counts up from zero the first time it scrolls into view.
 * The server renders the final value, so it is correct without JavaScript and for reduced motion.
 */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const target = Number(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element || !Number.isInteger(target) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen at load: leave the final value in place.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setShown(String(Math.round(target * eased)));
          if (progress < 1) frame = window.requestAnimationFrame(tick);
        };
        frame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  // The final value keeps its width reserved so the row does not shift while counting.
  return (
    <span className="count-up" ref={ref}>
      <span aria-hidden="true" className="count-up__ghost">{value}</span>
      <span className="count-up__value">{shown}</span>
    </span>
  );
}
