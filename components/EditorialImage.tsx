import Image from "next/image";

export type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  className?: string;
};

export function EditorialImage({
  src,
  alt,
  caption,
  priority = false,
  sizes = "(max-width: 680px) calc(100vw - 40px), (max-width: 980px) 75vw, 50vw",
  aspect = "4 / 3",
  objectPosition = "50% 50%",
  objectFit = "cover",
  className = "",
}: EditorialImageProps) {
  return (
    <figure className={`editorial-image ${className}`.trim()}>
      <div
        className={`editorial-image__media editorial-image__media--${objectFit}`}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit, objectPosition }}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
