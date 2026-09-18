import Link from "next/link";
import { AskNora } from "@/components/AskNora";

// Footer navigation. Groups link to real pages and to homepage sections.
// An href of "nora" is a special action that opens the floating chat widget.
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Projects", href: "/#categories" },
      { label: "Guides", href: "/#blog" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Talk to Nora", href: "nora" },
      { label: "All categories", href: "/categories" },
      { label: "Kitchen guide", href: "/guides/kitchen-30k" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 lg:gap-28">
          {/* Brand */}
          <div className="flex max-w-[300px] flex-col gap-3">
            <div className="text-[18px] font-extrabold leading-none tracking-[-.03em] text-white">
              MyHomeQuote
            </div>
            <p className="text-[13.5px] leading-[1.6] text-white/55">
              Tell Nora your project and she&apos;ll set you up with a trusted
              local pro for a personalized quote. No forms, no chasing.
            </p>
            <a
              href="mailto:support@myhomequote.com"
              className="text-[13.5px] font-medium leading-none text-white/70 transition-colors hover:text-accent"
            >
              support@myhomequote.com
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-14">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-white/40">
                  {col.title}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) =>
                    l.href === "nora" ? (
                      <li key={l.label}>
                        <AskNora className="text-[13.5px] leading-none text-white/60 transition-colors hover:text-accent">
                          {l.label}
                        </AskNora>
                      </li>
                    ) : (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-[13.5px] leading-none text-white/60 transition-colors hover:text-accent"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="text-[12.5px] leading-none text-white/45">
            © 2026 MyHomeQuote. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
