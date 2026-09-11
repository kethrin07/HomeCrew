"use client";

import { useEffect, useRef, useState } from "react";

// Automatic reveal played once when the section first scrolls into view. The
// separation line runs a scripted timeline: from the extreme right across to
// the extreme left, then back to the centre. `ba` is the width
// of the "before" overlay, so 96 ≈ extreme right, 4 ≈ extreme left, 50 ≈ centre.
const INTRO_START = 96;
const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

// Each phase tweens from the previous value to `to` over `ms`; a phase with no
// `to` holds the current value for `ms` (the pause).
const INTRO_PHASES: { to?: number; ms: number }[] = [
  { to: 4, ms: 1600 }, // right → extreme left
  { to: 50, ms: 900 }, // left → centre
];
const INTRO_TO = 50;

/**
 * Draggable before/after reveal (design 1d). The range input drives the width
 * of the "before" overlay, mirroring the support.js `ba` state. On first view
 * the handle animates itself from before to after; any user interaction takes
 * over and cancels the intro.
 */
export function BeforeAfter() {
  const [ba, setBa] = useState(INTRO_START);
  const sectionRef = useRef<HTMLElement>(null);
  // Set once the user grabs the handle (or the intro finishes) so we never
  // fight their input or replay the animation.
  const interacted = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    let phaseStart = 0;
    let phase = 0;
    let from = INTRO_START;

    const tick = (now: number) => {
      if (interacted.current) return;
      if (!phaseStart) phaseStart = now;

      const current = INTRO_PHASES[phase];
      const t = Math.min((now - phaseStart) / current.ms, 1);
      const to = current.to ?? from;
      setBa(from + (to - from) * easeInOut(t));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else if (phase < INTRO_PHASES.length - 1) {
        from = to;
        phase += 1;
        phaseStart = now;
        raf = requestAnimationFrame(tick);
      } else {
        interacted.current = true;
      }
    };

    // Respect users who prefer reduced motion — jump straight to the rest state.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !interacted.current) {
          if (reduce) {
            interacted.current = true;
            setBa(INTRO_TO);
          } else {
            raf = requestAnimationFrame(tick);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const onUserInput = (value: number) => {
    interacted.current = true;
    setBa(value);
  };

  return (
    <section ref={sectionRef} className="px-5 pb-14 sm:px-8 sm:pb-[66px] lg:px-12">
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
          after — 6 weeks
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

        {/* Visible handle — driven by the same `ba` as the separation line so
            the two stay locked together; the range input below does the actual
            dragging. pointer-events-none so it never intercepts the drag. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 z-[1] flex h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/[.14] bg-white shadow-[0_2px_10px_rgba(20,23,26,0.28)]"
          style={{ left: `${ba}%` }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-ink/55">
            <path d="M9.5 7l-4 5 4 5M14.5 7l4 5-4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <input
          type="range"
          min={4}
          max={96}
          value={ba}
          onPointerDown={() => (interacted.current = true)}
          onChange={(e) => onUserInput(Number(e.target.value))}
          aria-label="Reveal the finished kitchen"
          className="ba-range absolute inset-x-0 bottom-1/2 m-0 w-full cursor-ew-resize"
        />
      </div>
      </div>
    </section>
  );
}
