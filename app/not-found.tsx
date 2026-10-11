import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404</p>
      <h1>This page is not part of the current record.</h1>
      <p className="lead">Return to the homepage or continue through the main sections.</p>
      <div className="actions">
        <Link className="button" href="/">Return home</Link>
        <Link className="button button--ghost" href="/centres">Explore the centres</Link>
      </div>
    </section>
  );
}
