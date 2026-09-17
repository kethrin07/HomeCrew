"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

/**
 * Fades + slides its children in when they first scroll into view. Lightweight
 * (IntersectionObserver + CSS transition, no animation library) and respects
 * `prefers-reduced-motion`. Use `delay` to stagger siblings.
 */
type Direction = "up" | "down" | "left" | "right" | "zoom" | "none";

const HIDDEN: Record<Direction, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-12",
  right: "translate-x-12",
  zoom: "scale-[0.98]",
  none: "",
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={clsx(
        "transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] motion-reduce:transition-none",
        shown
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `${HIDDEN[direction]} opacity-0`,
        className,
      )}
    >
      {children}
    </div>
  );
}
