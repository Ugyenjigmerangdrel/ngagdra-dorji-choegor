import Image from "next/image";

export function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "mark mark--compact" : "mark"} aria-hidden="true">
      <Image className="mark__image" src="/logo.svg" alt="" width={671} height={787} unoptimized />
    </span>
  );
}
