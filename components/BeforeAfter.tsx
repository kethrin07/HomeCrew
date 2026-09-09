"use client";

import { useState } from "react";

const STRIP = [
  { img: "/images/after.png", featured: true },
  { img: "/images/bathrooms.png" },
  { img: "/images/decks-and-yards.png" },
  { img: "/images/roof-and-gutters.png" },
];

/**
 * Draggable before/after reveal. The range input drives the width of the "after"
 * overlay; a filmstrip of other projects sits beneath. Matches HomeCrew Warm.
 */
export function BeforeAfter() {
  const [ba, setBa] = useState(52);

  return (
    <section className="px-5 py-14 sm:px-8 sm:py-[78px] lg:px-11">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[34px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-12">
          <div className="flex flex-col gap-[14px]">
            <div className="text-[10px] font-medium uppercase leading-none tracking-[.28em] text-accent">
              Before &amp; after
            </div>
            <h2 className="m-0 max-w-[520px] font-display uppercase text-[30px] font-semibold leading-[1.05] tracking-[.01em] text-olive-dark sm:text-[38px] lg:text-[46px]">
              We provide you the best experience
            </h2>
          </div>
          <p className="m-0 max-w-[320px] text-[14.5px] leading-[1.7] text-ink/[.62]">
            Real projects from HomeCrew pros, with what the homeowner actually
            paid. Drag the handle.
          </p>
        </div>

        {/* Reveal */}
        <div
          className="relative h-[320px] overflow-hidden rounded-[16px] sm:h-[470px]"
          style={{
            backgroundImage: "url('/images/before.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="absolute bottom-5 right-5 rounded-[5px] bg-surface/[.86] px-[11px] py-[7px] text-[9.5px] font-medium uppercase leading-[1.4] tracking-[.16em] text-ink/[.62]">
            Before — original galley kitchen
          </span>

          <div
            className="absolute inset-y-0 left-0 overflow-hidden border-r-[3px] border-surface"
            style={{ width: `${ba}%` }}
          >
            {/* Full-width so "after" stays aligned with "before" as the clip shrinks. */}
            <div
              className="absolute inset-y-0 left-0"
              style={{
                width: `${(100 / ba) * 100}%`,
                backgroundImage: "url('/images/after.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span className="absolute left-5 top-5 rounded-[5px] bg-surface/[.86] px-[11px] py-[7px] text-[9.5px] font-medium uppercase leading-[1.4] tracking-[.16em] text-ink/[.62]">
              After — 6 weeks · $38,400
            </span>
          </div>

          <input
            type="range"
            min={4}
            max={96}
            value={ba}
            onChange={(e) => setBa(Number(e.target.value))}
            aria-label="Reveal the finished kitchen"
            className="ba-range absolute inset-x-0 bottom-1/2 m-0 w-full cursor-ew-resize"
          />
        </div>

        {/* Filmstrip */}
        <div className="flex gap-3">
          {STRIP.map((s, i) => (
            <div
              key={i}
              className={`h-[72px] flex-1 rounded-[10px] bg-cover bg-center sm:h-[96px] ${
                s.featured ? "ring-2 ring-accent" : ""
              }`}
              style={{ backgroundImage: `url('${s.img}')` }}
            />
          ))}
          <div
            className="relative flex h-[72px] flex-1 items-center justify-center rounded-[10px] bg-cover bg-center font-display text-[12px] font-semibold uppercase tracking-[.1em] text-surface sm:h-[96px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(28,32,24,.62),rgba(28,32,24,.62)), url('/images/before.png')",
            }}
          >
            + 214 more
          </div>
        </div>
      </div>
    </section>
  );
}
