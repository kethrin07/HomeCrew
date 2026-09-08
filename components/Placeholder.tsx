import Image from "next/image";
import { clsx } from "@/lib/clsx";

/**
 * Media slot used throughout the design. Without `src` it renders the hatched
 * placeholder (optionally with a small mono caption). With `src` it renders a
 * real, optimised photo that covers the slot.
 */
export function Placeholder({
  label,
  className,
  align = "bottom",
  src,
  alt = "",
}: {
  label?: string;
  className?: string;
  align?: "bottom" | "none";
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <div className={clsx("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "hatch",
        align === "bottom" && "flex items-end p-3",
        className,
      )}
    >
      {label ? (
        <span className="rounded bg-white/80 px-[7px] py-1 font-mono text-[10px] uppercase leading-none tracking-[.06em] text-ink/45">
          {label}
        </span>
      ) : null}
    </div>
  );
}
