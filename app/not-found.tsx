import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AskNora } from "@/components/AskNora";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { label: "Home", href: "/" },
  { label: "All categories", href: "/categories" },
  { label: "Guides", href: "/guides" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <section className="flex flex-1 items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-5">
          <div className="font-mono text-[11px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
            Error 404
          </div>
          <h1 className="balance m-0 text-[34px] font-extrabold leading-[1.08] tracking-tighter2 text-ink sm:text-[46px]">
            We couldn&apos;t find that page.
          </h1>
          <p className="pretty m-0 max-w-[420px] text-[15.5px] font-normal leading-[1.6] text-ink/[.62]">
            The link may be broken or the page may have moved. Let&apos;s get you
            back on track, or just ask Nora about your project.
          </p>

          <div className="mt-1 flex flex-col gap-[10px] sm:flex-row">
            <AskNora className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-[24px] py-[14px] text-[14.5px] font-semibold leading-none text-white transition-transform hover:scale-[1.02] hover:text-white">
              Ask Nora
              <span aria-hidden="true">→</span>
            </AskNora>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-[24px] py-[14px] text-[14.5px] font-semibold leading-none text-ink transition-colors hover:border-ink/40 hover:text-ink"
            >
              Back home
            </Link>
          </div>

          <nav className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium leading-none text-ink/70 transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <Footer />
    </main>
  );
}
