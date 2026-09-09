import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#categories" },
  { label: "Pros", href: "/#how" },
  { label: "Guides", href: "/guides/kitchen-30k" },
];

/**
 * Primary site header — cream bar, HC mark, centered uppercase nav, terracotta
 * CTA. Matches the HomeCrew Warm design.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-11">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6">
        {/* Logo lockup */}
        <Link href="/" className="flex flex-none items-center gap-3">
          <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg bg-accent font-display text-[15px] font-semibold uppercase leading-none text-surface">
            HC
          </span>
          <span className="flex flex-col">
            <span className="font-display text-[17px] font-semibold uppercase leading-none tracking-[.06em] text-olive-dark">
              HomeCrew
            </span>
            <span className="mt-1 text-[8.5px] font-medium uppercase leading-none tracking-[.22em] text-ink/50">
              Matched to vetted pros
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 font-display text-[13px] font-medium uppercase tracking-[.12em] text-ink md:flex">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="text-ink transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
          <span className="text-ink/55">More ⌄</span>
        </nav>

        {/* CTA */}
        <Link
          href="/ava"
          className="flex-none rounded-md bg-accent px-[22px] py-[13px] font-display text-[12.5px] font-semibold uppercase leading-none tracking-[.12em] text-surface transition-colors hover:bg-accent-dark hover:text-surface"
        >
          Ask Nora
        </Link>
      </div>
    </header>
  );
}
