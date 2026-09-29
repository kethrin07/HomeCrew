"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

/**
 * Sticky "on this page" section index with scroll-spy: highlights the section
 * currently in view. Anchors jump to the matching <section id> in the article.
 */
export function GuideToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Highlight the topmost section currently intersecting the viewport band.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="flex flex-col gap-3">
      <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-ink/45">
        On this page
      </div>
      <ul className="m-0 flex list-none flex-col gap-0.5 border-l border-line p-0">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-3 text-[13px] leading-[1.35] transition-colors ${
                active === i.id
                  ? "border-accent font-semibold text-accent-link"
                  : "border-transparent text-ink/55 hover:text-ink"
              }`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
