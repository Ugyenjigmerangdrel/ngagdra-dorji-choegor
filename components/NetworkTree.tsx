import Link from "next/link";
import { centres, districts } from "@/lib/centres";

/**
 * The Ngagdra network drawn as a tree: the institute at the root, each Dzongkhag
 * as a branch, and every documented place of practice as a leaf. It is a real
 * list of links, so it reads correctly without its connecting lines.
 */
export function NetworkTree({ caption }: { caption?: string }) {
  const hub = centres.find((centre) => centre.hub)!;
  const places = centres.filter((centre) => !centre.hub);
  return (
    <figure className="network">
      <div className="network__root">
        <Link href={`/centres/${hub.slug}`} className="network__hub">
          <span className="network__node" aria-hidden="true" />
          <strong>{hub.name}</strong>
          <span>{hub.type} · {hub.place}</span>
        </Link>
      </div>
      <ul className="network__branches" aria-label="Places of practice by Dzongkhag">
        {districts.map((district, index) => {
          const leaves = places.filter((centre) => centre.district === district);
          return (
            <li key={district} className="network__branch" style={{ ["--i" as string]: index }}>
              <p className="network__district">{district}<span>{leaves.length}</span></p>
              <ul>
                {leaves.map((centre) => (
                  <li key={centre.slug}>
                    <Link href={`/centres/${centre.slug}`}>{centre.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
