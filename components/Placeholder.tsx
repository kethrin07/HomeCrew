import { clsx } from "@/lib/clsx";

/**
 * The hatched media placeholder used throughout the design in place of
 * real photography / video. Optionally renders a small mono caption pinned
 * to the bottom-left corner.
 */
export function Placeholder({
  label,
  className,
  align = "bottom",
}: {
  label?: string;
  className?: string;
  align?: "bottom" | "none";
}) {
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
