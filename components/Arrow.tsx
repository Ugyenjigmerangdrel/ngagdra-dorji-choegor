/** The site's one link arrow, drawn on a 16px grid in the same 1.5px stroke as the retreat icons. */
export function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <svg className={`arrow arrow--${direction}`} viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={direction === "down" ? "M8 2.5v11M3.5 9 8 13.5 12.5 9" : "M2.5 8h11M9 3.5 13.5 8 9 12.5"} />
    </svg>
  );
}
