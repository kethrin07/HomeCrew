import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AskNora } from "@/components/AskNora";
import { Reveal } from "@/components/Reveal";
import { CATEGORY_GROUPS } from "@/lib/categories";

const SITE_URL = "https://homecrew.com";

export const metadata: Metadata = {
  title: "All project categories",
  description:
    "Every type of home project Nora can match you with, from kitchens and bathrooms to plumbing, windows, fencing, solar and more.",
  alternates: { canonical: "/categories" },
};

const CATEGORIES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "All categories",
      item: `${SITE_URL}/categories`,
    },
  ],
};

export default function CategoriesPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <JsonLd data={CATEGORIES_SCHEMA} />
      <Header />

      <section className="px-5 py-14 sm:px-8 sm:py-[72px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
          <Reveal className="flex flex-col gap-[14px]">
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
              All categories
            </div>
            <h1 className="balance m-0 max-w-[620px] text-[30px] font-bold leading-[1.1] tracking-[-.032em] text-ink sm:text-[38px] lg:text-[44px]">
              Whatever you&apos;re dreaming up, Nora can line up the pros
            </h1>
            <p className="pretty m-0 max-w-[440px] text-[15.5px] font-normal leading-[1.6] text-ink/[.62]">
              Don&apos;t see an exact match? Tell us anyway. Nora loves the unusual
              projects too.
            </p>
          </Reveal>

          <div className="flex flex-col gap-10">
            {CATEGORY_GROUPS.map((group) => (
              <div key={group.heading} className="flex flex-col gap-[18px]">
                <Reveal className="flex items-center gap-3">
                  <h2 className="m-0 text-[13px] font-semibold uppercase leading-none tracking-[.08em] text-ink">
                    {group.heading}
                  </h2>
                  <div className="h-px flex-1 bg-ink/[.12]" />
                </Reveal>
                <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 lg:grid-cols-4">
                  {group.items.map((item, i) => (
                    <Reveal key={item.name} delay={i * 55}>
                      <AskNora
                        seed={item.name}
                        ariaLabel={`Ask Nora about ${item.name}`}
                        className="group flex w-full items-center gap-2.5 rounded-xl border border-line px-3 py-[13px] text-left transition-shadow hover:shadow-card sm:gap-3 sm:px-4 sm:py-[15px]"
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-surface text-accent-link sm:h-9 sm:w-9"
                        >
                          <item.icon size={18} strokeWidth={1.75} />
                        </span>
                        <span className="flex-1 text-[14px] font-semibold leading-[1.3] text-ink sm:text-[14.5px]">
                          {item.name}
                        </span>
                        <span className="font-mono text-[13px] leading-none text-ink/30 transition-colors group-hover:text-accent-link">
                          →
                        </span>
                      </AskNora>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal className="flex flex-col items-start justify-between gap-5 rounded-[14px] border border-ink/10 bg-surface px-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-[26px] sm:py-[22px]">
            <div className="text-[15px] font-medium leading-[1.5] text-ink/[.72]">
              Tell Nora what you&apos;re dreaming up and she&apos;ll take it from
              there, with no forms and no call list.
            </div>
            <AskNora
              className="w-full flex-none rounded-[10px] bg-accent px-[22px] py-[14px] text-center text-[14.5px] font-semibold leading-[1.2] text-white hover:text-white sm:w-auto"
            >
              Start with Nora
            </AskNora>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
