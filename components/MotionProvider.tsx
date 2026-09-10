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

const revealSelector = [
  ".page-transition > section",
  ".page-transition > article",
  ".page-transition > figure",
  ".page-transition > .container",
  ".timeline > article",
  ".centre-district",
  ".event-record",
  ".journal-story",
  ".journal-briefs > a",
  ".story-card",
  ".link-panels > a",
  ".related-links > a",
].join(",");

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.45,
  });

  return <motion.div className="motion-scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function MotionPage({ children }: { children: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const documentRoot = document.documentElement;
    const previousScrollBehavior = documentRoot.style.scrollBehavior;
    documentRoot.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      documentRoot.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      documentRoot.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root || reduceMotion) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(revealSelector));
    const animations: Array<ReturnType<typeof animate>> = [];
    const belowTheFold = targets.filter((element) => {
      const bounds = element.getBoundingClientRect();
      return bounds.top >= window.innerHeight * 0.94 || bounds.bottom <= 0;
    });

    belowTheFold.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(18px)";
    });

    const stopObserving = inView(
      belowTheFold,
      (element) => {
        const index = belowTheFold.indexOf(element as HTMLElement);
        const animation = animate(
          element,
          { opacity: 1, y: 0 },
          {
            type: "spring",
            stiffness: 125,
            damping: 22,
            mass: 0.72,
            delay: (index % 4) * 0.045,
          },
        );
        animations.push(animation);
      },
      { amount: 0.08, margin: "0px 0px -7% 0px" },
    );

    return () => {
      stopObserving();
      animations.forEach((animation) => animation.stop());
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
      <ScrollProgress />
      <AnimatePresence mode="wait" initial={false}>
        <MotionPage key={pathname}>{children}</MotionPage>
      </AnimatePresence>
    </MotionConfig>
  );
}
