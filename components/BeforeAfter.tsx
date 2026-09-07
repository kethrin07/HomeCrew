"use client";

import { useState } from "react";

/**
 * Draggable before/after reveal (design 1d). The range input drives the width
 * of the "after" overlay, mirroring the support.js `ba` state.
 */
export function BeforeAfter() {
  const [ba, setBa] = useState(52);

  return (
    <section className="flex flex-col gap-[22px] px-8 pb-[66px] sm:px-12">
      <div className="flex items-baseline gap-[14px]">
        <h2 className="m-0 text-[38px] font-bold leading-[1.1] tracking-[-.03em] text-ink">
          Before, and after
        </h2>
        <span className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/40">
          drag the handle
        </span>
      </div>

      <div
        className="relative h-[420px] overflow-hidden rounded-[14px]"
        style={{
          background:
            "repeating-linear-gradient(135deg,rgba(20,23,26,.06) 0 8px,rgba(20,23,26,0) 8px 16px),oklch(0.9 0.012 60)",
        }}
      >
        <span className="absolute bottom-4 left-4 rounded bg-white/85 px-2 py-[5px] font-mono text-[10px] font-medium uppercase leading-none tracking-[.06em] text-ink/50">
          before — original kitchen
        </span>

        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-white"
          style={{
            width: `${ba}%`,
            background:
              "repeating-linear-gradient(135deg,rgba(20,23,26,.06) 0 8px,rgba(20,23,26,0) 8px 16px),oklch(0.93 0.02 165)",
          }}
        >
          <span className="absolute left-4 top-4 rounded bg-white/85 px-2 py-[5px] font-mono text-[10px] font-medium uppercase leading-none tracking-[.06em] text-ink/50">
            after — 6 weeks, $42k
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
    </section>
  );
}
