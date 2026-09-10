export function ProseSection({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="container split-section section-pad">
      <div>{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2>{title}</h2></div>
      <div className="prose">{children}</div>
    </section>
  );
}
