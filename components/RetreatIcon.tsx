/**
 * Line icons for "What does a retreat require?". Drawn on a 32px grid with a
 * single 1.5px stroke so they sit with the editorial type rather than over it.
 */
const paths: Record<string, React.ReactNode> = {
  nourishment: (
    <>
      <path d="M5 15h22a11 11 0 0 1-22 0Z" />
      <path d="M12 26h8" />
      <path d="M12 10c0-2 2-2 2-4M17 10c0-2 2-2 2-4" />
    </>
  ),
  essentials: (
    <>
      <path d="M11 5h10l6 5-3 4-3-2v15H11V12l-3 2-3-4 6-5Z" />
      <path d="M13 5c0 2 1.3 3 3 3s3-1 3-3" />
    </>
  ),
  place: (
    <>
      <path d="M4 14 16 6l12 8" />
      <path d="M7 12.5V26h18V12.5" />
      <path d="M14 26v-6h4v6" />
      <path d="M2 14h3M27 14h3" />
    </>
  ),
  learning: (
    <>
      <path d="M4 8c4-1.5 8-1.5 12 1 4-2.5 8-2.5 12-1v16c-4-1.5-8-1.5-12 1-4-2.5-8-2.5-12-1Z" />
      <path d="M16 9v16" />
    </>
  ),
  continuity: (
    <>
      <path d="M26 16a10 10 0 1 1-3-7.1" />
      <path d="M24 4v5h-5" />
      <circle cx="16" cy="16" r="2" />
    </>
  ),
};

export function RetreatIcon({ name }: { name: string }) {
  return (
    <svg className="retreat-icon" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
