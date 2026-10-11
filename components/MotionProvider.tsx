"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { animate, inView } from "motion";

/* Scroll reveal ----------------------------------------------------------------
   Content fades and rises into place as it reaches the viewport. Targets are chosen
   by size rather than by class: a block shorter than most of the screen animates as
   one piece; a taller one (a long section, the chronicle) is split into its children,
   so a reader always sees content arrive and nothing can be held back by its height. */

/** Elements that animate as a unit even when tall: never split into inline children. */
const ATOMIC = "p, li, figure, blockquote, dl, details, h1, h2, h3, h4, .teaser, .bleed, .featured-event, .pending, .stats, .steps, .pillars, .requires";
/** Elements with their own motion, or that should never be hidden. */
const SKIP = "script, style, .network, .subnav, .crumbs, .page-header";

function collectRevealTargets(element: HTMLElement, limit: number, out: HTMLElement[]) {
  if (element.matches(SKIP)) return;
  const height = element.offsetHeight;
  if (!height) return;
  const children = Array.from(element.children) as HTMLElement[];
  if (height <= limit || element.matches(ATOMIC) || !children.length) {
    out.push(element);
    return;
  }
  children.forEach((child) => collectRevealTargets(child, limit, out));
}

/** Long-form pages (a centre, story, event or About chapter) show reading progress. */
const isLongForm = (pathname: string) => /^\/(centres|stories|events|about)\/[^/]+/.test(pathname);

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.45,
  });

  return <motion.div className="motion-scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/** Scrolls a fresh page to its #fragment (a link into another page's section), or to the top. */
function scrollToEntry() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (target) target.scrollIntoView({ block: "start" });
  else window.scrollTo(0, 0);
}

function MotionPage({ children }: { children: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const documentRoot = document.documentElement;
    documentRoot.style.scrollBehavior = "auto";
    scrollToEntry();

    // Fonts and images can shift layout after the first paint, so settle on the target again,
    // unless the reader has already started scrolling. Only then do in-page jumps become smooth.
    let userScrolled = false;
    const markUserScroll = () => { userScrolled = true; };
    window.addEventListener("wheel", markUserScroll, { passive: true, once: true });
    window.addEventListener("touchmove", markUserScroll, { passive: true, once: true });
    window.addEventListener("keydown", markUserScroll, { once: true });
    const settle = () => { if (!userScrolled && window.location.hash) scrollToEntry(); };
    const frame = window.requestAnimationFrame(settle);
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      settle();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) documentRoot.style.scrollBehavior = "smooth";
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("wheel", markUserScroll);
      window.removeEventListener("touchmove", markUserScroll);
      window.removeEventListener("keydown", markUserScroll);
      documentRoot.style.scrollBehavior = "auto";
    };
  }, []);

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root || reduceMotion) return;
    const limit = window.innerHeight * 0.75;
    const targets: HTMLElement[] = [];
    Array.from(root.children).forEach((child) => collectRevealTargets(child as HTMLElement, limit, targets));
    // Only what is still below the fold waits; everything already on screen stays put.
    const pending = targets.filter((element) => element.getBoundingClientRect().top >= window.innerHeight * 0.92);
    // Siblings that arrive together are staggered, left to right.
    const order = new Map<HTMLElement, number>();
    const perParent = new Map<Element | null, number>();
    pending.forEach((element) => {
      const index = perParent.get(element.parentElement) ?? 0;
      perParent.set(element.parentElement, index + 1);
      order.set(element, index);
      element.style.opacity = "0";
      element.style.transform = "translateY(24px)";
    });
    const animations: Array<ReturnType<typeof animate>> = [];
    // "some": an element reveals as soon as any part of it is on screen, however tall it is.
    const stop = inView(
      pending,
      (element) => {
        animations.push(
          animate(element, { opacity: 1, y: 0 }, { type: "spring", stiffness: 110, damping: 22, mass: 0.8, delay: ((order.get(element as HTMLElement) ?? 0) % 5) * 0.06 }),
        );
      },
      { amount: "some", margin: "0px 0px -8% 0px" },
    );
    return () => {
      stop();
      animations.forEach((animation) => animation.stop());
      pending.forEach((element) => { element.style.opacity = ""; element.style.transform = ""; });
    };
  }, [reduceMotion]);

  // The network tree draws itself, root to leaves, once.
  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root || reduceMotion) return;
    const trees = Array.from(root.querySelectorAll<HTMLElement>(".network"));
    const pending = trees.filter((tree) => tree.getBoundingClientRect().top > window.innerHeight * 0.85);
    pending.forEach((tree) => tree.classList.add("network--armed"));
    const stop = inView(
      pending,
      (tree) => {
        tree.classList.add("network--drawn");
      },
      { amount: "some", margin: "0px 0px -15% 0px" },
    );
    return () => {
      stop();
      pending.forEach((tree) => tree.classList.remove("network--armed", "network--drawn"));
    };
  }, [reduceMotion]);

  return (
    <motion.div
      ref={pageRef}
      className="page-transition"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }}
      transition={{
        opacity: { duration: reduceMotion ? 0.12 : 0.26, ease: [0.22, 1, 0.36, 1] },
        y: { type: "spring", stiffness: 155, damping: 25, mass: 0.68 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      {isLongForm(pathname) ? <ScrollProgress /> : null}
      <AnimatePresence mode="wait" initial={false}>
        <MotionPage key={pathname}>{children}</MotionPage>
      </AnimatePresence>
    </MotionConfig>
  );
}
