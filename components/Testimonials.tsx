"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

export interface Testimonial {
  stars: string;
  quote: string;
  name: string;
  meta: string;
  img: string;
}

const INTERVAL_MS = 2000; // time each card stays before advancing
const TRANSITION_MS = 800; // slide duration

function Card({ t, active }: { t: Testimonial; active: boolean }) {
  return (
    <div
      className={`flex h-full w-full flex-col gap-[14px] rounded-[16px] border bg-white p-[22px] transition-[opacity,box-shadow] duration-500 sm:p-[26px] ${
        active
          ? "border-accent/40 opacity-100 shadow-composer"
          : "border-line/60 opacity-45"
      }`}
    >
      <div className="font-mono text-[13px] font-medium leading-none tracking-[.08em] text-accent-link">
        {t.stars}
      </div>
      <p className="m-0 text-[15px] font-normal leading-[1.6] text-ink/75 sm:text-[15.5px]">
        {t.quote}
      </p>
      <div className="mt-auto flex items-center gap-[10px] pt-1">
        <Image
          src={t.img}
          alt={`Photo of ${t.name}, a MyHomeQuote homeowner`}
          width={38}
          height={38}
          className="h-[38px] w-[38px] rounded-full object-cover"
        />
        <div>
          <div className="text-[13.5px] font-semibold leading-[1.3] text-ink">
            {t.name}
          </div>
          <div className="text-[12px] font-normal leading-[1.3] text-ink/50">
            {t.meta}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  const n = items.length;
  // Three copies so the centered card always has neighbours to peek, and the
  // loop can snap back by one copy invisibly (same content) with no rewind.
  const extended = [...items, ...items, ...items];

  const [index, setIndex] = useState(n); // start in the middle copy
  const [animate, setAnimate] = useState(true);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Centre the card at `index` inside the viewport.
  const recalc = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    setOffset(
      container.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2),
    );
  }, [index]);

  useLayoutEffect(() => {
    recalc();
  }, [recalc]);

  useEffect(() => {
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  // Auto-advance, paused while hovered.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => i + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  // Once we drift out of the middle copy, wait for the slide to finish then
  // snap by one copy (identical content) with animation off, so it never rewinds.
  useEffect(() => {
    if (index >= 2 * n || index < n) {
      const t = window.setTimeout(() => {
        setAnimate(false);
        setIndex((i) => (i >= 2 * n ? i - n : i + n));
      }, TRANSITION_MS);
      return () => window.clearTimeout(t);
    }
  }, [index, n]);

  // Re-enable the transition on the next frame after a snap.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const activeItem = ((index % n) + n) % n;
  const go = (dir: -1 | 1) => setIndex((i) => i + dir);

  const arrow = (dir: -1 | 1) => (
    <button
      onClick={() => go(dir)}
      aria-label={dir === -1 ? "Previous testimonial" : "Next testimonial"}
      className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line bg-white text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
    >
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d={dir === -1 ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div
      className="flex flex-col items-center gap-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sliding track */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)]"
      >
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-5"
          style={{
            transform: `translateX(${offset}px)`,
            transition: animate
              ? `transform ${TRANSITION_MS}ms cubic-bezier(0.16,1,0.3,1)`
              : "none",
          }}
        >
          {extended.map((t, i) => (
            <div key={i} className="w-[300px] flex-none sm:w-[360px]">
              <Card t={t} active={i === index} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls: arrows + dots */}
      <div className="flex items-center gap-4">
        {arrow(-1)}
        <div className="flex items-center gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex((cur) => cur - (((cur % n) + n) % n) + i)}
              aria-label={`Show ${t.name}'s review`}
              aria-current={i === activeItem}
              className={`h-2 rounded-full transition-all ${
                i === activeItem ? "w-5 bg-accent" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
        {arrow(1)}
      </div>
    </div>
  );
}
