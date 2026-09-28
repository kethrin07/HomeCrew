"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Guide } from "@/lib/guides";

// "2026-02-18" → "Feb 2026"
function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/**
 * Blog index: guides sorted newest-first, filterable by category. Every guide
 * is rendered (good for SEO); the active filter just hides the rest. Cards are
 * image-less for now, drop an image at the top of the card when guides ship.
 */
export function GuidesIndex({ guides }: { guides: Guide[] }) {
  // Newest first.
  const sorted = useMemo(
    () => [...guides].sort((a, b) => b.date.localeCompare(a.date)),
    [guides],
  );

  // Categories in order of first (most recent) appearance.
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const g of sorted) {
      if (!seen.has(g.tag)) {
        seen.add(g.tag);
        list.push(g.tag);
      }
    }
    return list;
  }, [sorted]);

  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? sorted : sorted.filter((g) => g.tag === active);

  return (
    <div className="flex flex-col gap-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={
              active === c
                ? "rounded-full bg-ink px-3.5 py-2 text-[13px] font-semibold leading-none text-white"
                : "rounded-full border border-line px-3.5 py-2 text-[13px] font-medium leading-none text-ink/70 transition-colors hover:border-ink/30 hover:text-ink"
            }
          >
            {c}
          </button>
        ))}
      </div>

      {/* Guides */}
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((g) => {
          const inner = (
            <>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10.5px] font-semibold uppercase leading-none tracking-[.08em] text-accent-link">
                  {g.tag}
                </span>
                <span className="font-mono text-[10.5px] font-medium leading-none text-ink/45">
                  {formatDate(g.date)} · {g.readTime}
                </span>
              </div>
              <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink transition-colors group-hover:text-accent-link">
                {g.title}
              </div>
              <p className="pretty m-0 text-[14px] font-normal leading-[1.6] text-ink/[.6]">
                {g.description}
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold leading-none text-accent-link">
                {g.slug ? "Read guide" : "Coming soon"}
                {g.slug ? <span aria-hidden="true">→</span> : null}
              </span>
            </>
          );

          const cardClass =
            "flex flex-col gap-3 rounded-2xl border border-line bg-white p-5";

          return g.slug ? (
            <Link
              key={g.title}
              href={`/guides/${g.slug}`}
              className={`group ${cardClass} transition-shadow hover:shadow-card`}
            >
              {inner}
            </Link>
          ) : (
            <div key={g.title} className={`${cardClass} opacity-80`}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
