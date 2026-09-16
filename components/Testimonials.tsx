"use client";

import { useState } from "react";
import Image from "next/image";

export interface Testimonial {
  stars: string;
  quote: string;
  name: string;
  meta: string;
  img: string;
}

function Card({
  t,
  active,
}: {
  t: Testimonial;
  active: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-[14px] rounded-[16px] border bg-white p-[22px] transition-all duration-300 sm:p-[26px] ${
        active
          ? "border-line opacity-100 shadow-composer"
          : "border-line/60 opacity-50"
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
          alt={t.name}
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
  const [active, setActive] = useState(0);
  const n = items.length;
  const prev = (active - 1 + n) % n;
  const next = (active + 1) % n;

  const go = (dir: -1 | 1) => setActive((i) => (i + dir + n) % n);

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
    <div className="flex flex-col items-center gap-7">
      {/* Stage: center card with faded peeks on the sides (lg only) */}
      <div className="flex w-full items-stretch justify-center gap-4 lg:gap-0">
        <div className="hidden w-[320px] flex-none scale-[0.9] lg:-mr-10 lg:block">
          <Card t={items[prev]} active={false} />
        </div>

        <div className="z-10 w-full max-w-[460px] flex-none">
          <Card t={items[active]} active />
        </div>

        <div className="hidden w-[320px] flex-none scale-[0.9] lg:-ml-10 lg:block">
          <Card t={items[next]} active={false} />
        </div>
      </div>

      {/* Controls: arrows + avatar thumbnails */}
      <div className="flex items-center gap-4">
        {arrow(-1)}
        <div className="flex items-center gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-label={`Show ${t.name}'s review`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-5 bg-accent" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
        {arrow(1)}
      </div>
    </div>
  );
}
