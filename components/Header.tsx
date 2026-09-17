import Link from "next/link";
import { House } from "lucide-react";
import { AskNora } from "@/components/AskNora";

const NAV = [
  { label: "How it works", href: "/#how" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Categories", href: "/categories" },
  { label: "Blog", href: "/#blog" },
];

/**
 * Primary site header: brand on the left, centered nav links, and a Get started
 * CTA that opens the Nora widget.
 */
export function Header() {
  return (
    <header className="border-b border-line bg-white px-5 py-[14px] sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex flex-none items-center gap-2.5 text-ink hover:text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
            <House size={17} strokeWidth={2} />
          </span>
          <span className="text-[18px] font-extrabold leading-none tracking-[-.03em]">
            My<span className="text-accent">Home</span>Quote
          </span>
        </Link>

        {/* Centered nav */}
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

        {/* CTA */}
        <AskNora className="ml-auto inline-flex flex-none items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-[13.5px] font-semibold leading-none text-white transition-transform hover:scale-[1.02] hover:text-white md:ml-0">
          Get started
          <span aria-hidden="true">→</span>
        </AskNora>
      </div>
    </header>
  );
}
