import Image from "next/image";

type BleedImage = { src: string; alt: string; objectPosition?: string };

/**
 * A full-width documentary photograph (or a strip of up to three) between sections.
 * Colour comes from the institute's own photography rather than from decoration.
 */
// Captions are no longer shown under photographs (client request, 2026-11-19); the prop is kept so the wording is not lost.
export function Bleed({ images, priority = false }: { images: BleedImage[]; caption?: string; priority?: boolean }) {
  return (
    <figure className="bleed">
      <div className={images.length > 1 ? "bleed__strip" : "bleed__media"}>
        {images.map((image, index) => (
          <div className="bleed__cell" key={image.src}>
            <Image quality={90}
              src={image.src}
              alt={image.alt}
              fill
              priority={priority && index === 0}
              sizes={images.length > 1 ? (index === 0 ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 700px) 80vw, 50vw") : "100vw"}
              style={{ objectFit: "cover", objectPosition: image.objectPosition ?? "50% 50%" }}
            />
          </div>
        ))}
      </div>
    </figure>
  );
}
