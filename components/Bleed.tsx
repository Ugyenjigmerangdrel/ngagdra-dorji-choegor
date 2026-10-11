import Image from "next/image";

type BleedImage = { src: string; alt: string; objectPosition?: string };

/**
 * A full-width documentary photograph (or a strip of up to three) between sections.
 * Colour comes from the institute's own photography rather than from decoration.
 */
export function Bleed({ images, caption, priority = false }: { images: BleedImage[]; caption?: string; priority?: boolean }) {
  return (
    <figure className="bleed">
      <div className={images.length > 1 ? "bleed__strip" : "bleed__media"}>
        {images.map((image, index) => (
          <div className="bleed__cell" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority && index === 0}
              sizes={images.length > 1 ? (index === 0 ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 700px) 50vw, 25vw") : "100vw"}
              style={{ objectFit: "cover", objectPosition: image.objectPosition ?? "50% 50%" }}
            />
          </div>
        ))}
      </div>
      {caption ? <figcaption className="container">{caption}</figcaption> : null}
    </figure>
  );
}
