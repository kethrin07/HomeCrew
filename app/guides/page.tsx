import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Placeholder } from "@/components/Placeholder";
import { JsonLd } from "@/components/JsonLd";
import { GUIDES } from "@/lib/guides";

const SITE_URL = "https://homecrew.com";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical, no-nonsense guides on renovating your home: budgeting, hiring, permits, materials and more, from the MyHomeQuote team.",
  alternates: { canonical: "/guides" },
};

const GUIDES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
  ],
};

export default function GuidesIndexPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <JsonLd data={GUIDES_SCHEMA} />
      <Header />

      <section className="px-5 py-14 sm:px-8 sm:py-[72px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
          {/* Intro */}
          <div className="flex flex-col gap-[14px]">
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
              Guides
            </div>
            <h1 className="balance m-0 max-w-[620px] text-[30px] font-bold leading-[1.1] tracking-[-.032em] text-ink sm:text-[38px] lg:text-[44px]">
              A little reading before you renovate
            </h1>
            <p className="pretty m-0 max-w-[460px] text-[15.5px] font-normal leading-[1.6] text-ink/[.62]">
              Plain-spoken guides on budgeting, hiring, permits and materials, so
              you can start your project knowing what to expect.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => {
              const meta = (
                <>
                  <Placeholder
                    className="h-[150px] rounded-xl sm:h-[168px]"
                    align="none"
                  />
                  <div className="flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                    <span>{g.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{g.readTime}</span>
                    {!g.slug ? (
                      <span className="rounded-full bg-surface px-2 py-1 text-[9px] tracking-[.08em] text-ink/45">
                        Coming soon
                      </span>
                    ) : null}
                  </div>
                  <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
                    {g.title}
                  </div>
                  <p className="pretty m-0 text-[14px] font-normal leading-[1.6] text-ink/[.6]">
                    {g.description}
                  </p>
                </>
              );

              return g.slug ? (
                <Link
                  key={g.title}
                  href={`/guides/${g.slug}`}
                  className="group flex flex-col gap-[10px]"
                >
                  {meta}
                </Link>
              ) : (
                <div
                  key={g.title}
                  className="flex cursor-default flex-col gap-[10px] opacity-80"
                >
                  {meta}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
