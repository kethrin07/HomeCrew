"use client";

import { useState } from "react";

/**
 * Draggable before/after reveal (design 1d). The range input drives the width
 * of the "after" overlay, mirroring the support.js `ba` state.
 */
export function BeforeAfter() {
  const [ba, setBa] = useState(52);

  return (
    <section className="px-5 py-14 sm:px-8 sm:py-[66px] lg:px-12">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[22px]">
      <div className="flex flex-wrap items-baseline gap-x-[14px] gap-y-1">
        <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[34px] lg:text-[38px]">
          Before, and after
        </h2>
        <span className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/40">
          drag the handle
        </span>
      </div>

      <div
        className="relative h-[280px] overflow-hidden rounded-[14px] sm:h-[420px]"
        style={{
          backgroundImage: "url('/images/after.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="absolute bottom-4 right-4 rounded bg-white/85 px-2 py-[5px] font-mono text-[10px] font-medium uppercase leading-none tracking-[.06em] text-ink/50">
          after — 6 weeks, $42k
        </span>

        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-white"
          style={{ width: `${ba}%` }}
        >
          {/* Full-width so the "before" image stays aligned with "after" as the clip shrinks. */}
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: `${(100 / ba) * 100}%`,
              backgroundImage: "url('/images/before.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <span className="absolute left-4 top-4 rounded bg-white/85 px-2 py-[5px] font-mono text-[10px] font-medium uppercase leading-none tracking-[.06em] text-ink/50">
            before — original kitchen
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
      </div>
    </section>
  );
}
