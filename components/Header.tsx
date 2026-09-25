"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AskNora } from "@/components/AskNora";

const NAV = [
  { label: "How it works", href: "/#how" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Categories", href: "/categories" },
  { label: "Blog", href: "/#blog" },
];

/**
 * Primary site header: brand on the left, centered nav links (desktop) and a Get
 * started CTA. On mobile the links collapse into a slide-down menu behind a
 * hamburger button.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-line bg-white px-5 py-[14px] sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex flex-none items-center gap-2.5 text-ink hover:text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logohome.png"
            alt="MyHomeQuote logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9 flex-none object-contain"
          />
          <span className="text-[18px] font-extrabold leading-none tracking-[-.03em]">
            My<span className="text-accent">Home</span>Quote
          </span>
        </Link>

        {/* Centered nav (desktop) */}
        <nav className="hidden flex-1 items-center justify-center gap-7 text-[14px] font-medium leading-none text-ink md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <AskNora className="hidden flex-none items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-[13.5px] font-semibold leading-none text-white transition-transform hover:scale-[1.02] hover:text-white md:inline-flex">
          Get started
          <span aria-hidden="true">→</span>
        </AskNora>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="ml-auto flex h-10 w-10 flex-none items-center justify-center rounded-lg text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Slide-down menu (mobile) */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 pb-3 pt-2">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-3 text-[15px] font-medium leading-none text-ink transition-colors hover:bg-ink/5 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <AskNora
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-3 text-[14px] font-semibold leading-none text-white hover:text-white"
          >
            Get started
            <span aria-hidden="true">→</span>
          </AskNora>
        </nav>
      </div>
    </header>
  );
}
