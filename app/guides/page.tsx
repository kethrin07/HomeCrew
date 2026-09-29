import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AskNora } from "@/components/AskNora";
import { GuidesIndex } from "@/components/GuidesIndex";
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

          <GuidesIndex guides={GUIDES} />

          {/* Consultation CTA */}
          <div className="flex flex-col items-start justify-between gap-5 rounded-[14px] border border-ink/10 bg-surface px-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-[26px] sm:py-[22px]">
            <div className="text-[15px] font-medium leading-[1.5] text-ink/[.72]">
              Not sure where to start? Tell Nora about your project and she&apos;ll
              point you the right way, no forms, no call list.
            </div>
            <AskNora className="w-full flex-none rounded-[10px] bg-accent px-[22px] py-[14px] text-center text-[14.5px] font-semibold leading-[1.2] text-white hover:text-white sm:w-auto">
              Ask Nora
            </AskNora>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
