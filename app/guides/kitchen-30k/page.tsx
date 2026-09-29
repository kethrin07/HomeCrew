import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Placeholder } from "@/components/Placeholder";
import { JsonLd } from "@/components/JsonLd";
import { AskNora } from "@/components/AskNora";
import { GuideToc, type TocItem } from "@/components/GuideToc";

const SITE_URL = "https://homecrew.com";
const GUIDE_PATH = "/guides/kitchen-30k";
const GUIDE_TITLE = "What a mid-range kitchen actually buys you in 2026";
const GUIDE_DESCRIPTION =
  "A mid-range kitchen remodel averages about $28,000 nationally and is one of the few renovations that returns more than it costs at resale. Here's where the money goes, using 2025–2026 industry cost data, and how to keep the budget from ballooning.";
const PUBLISHED = "2026-09-15";

export const metadata: Metadata = {
  title: `${GUIDE_TITLE} · MyHomeQuote Guides`,
  description: GUIDE_DESCRIPTION,
  alternates: { canonical: GUIDE_PATH },
};

// Article + breadcrumb structured data for this guide.
const GUIDE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: GUIDE_TITLE,
      description: GUIDE_DESCRIPTION,
      author: { "@type": "Organization", name: "MyHomeQuote" },
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      image: `${SITE_URL}/opengraph-image`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}${GUIDE_PATH}`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: GUIDE_TITLE,
          item: `${SITE_URL}${GUIDE_PATH}`,
        },
      ],
    },
  ],
};

// Real NKBA-recommended budget allocation for a kitchen remodel.
const BREAKDOWN = [
  { label: "Cabinets & hardware", pct: 29, bar: "oklch(0.52 0.13 165)" },
  { label: "Labor (install)", pct: 17, bar: "oklch(0.58 0.11 165)" },
  { label: "Appliances", pct: 14, bar: "oklch(0.64 0.09 165)" },
  { label: "Countertops", pct: 10, bar: "oklch(0.70 0.07 165)" },
  { label: "Everything else", pct: 30, bar: "rgba(20,23,26,.25)" },
];

const TOC: TocItem[] = [
  { id: "mid-range", label: "What “mid-range” means" },
  { id: "cost-value", label: "Cost and resale value" },
  { id: "breakdown", label: "Where the money goes" },
  { id: "layout", label: "The real budget-buster" },
  { id: "trade-offs", label: "Three smart trade-offs" },
  { id: "buffer", label: "Build in a buffer" },
  { id: "sources", label: "Sources" },
];

const SOURCES = [
  {
    label: "Zonda / Remodeling: 2025 Cost vs. Value Report",
    href: "https://zondahome.com/2025-cost-vs-value-report/",
  },
  {
    label: "Angi: How much a kitchen remodel adds to home value",
    href: "https://www.angi.com/articles/how-much-does-a-kitchen-remodel-increase-home-value.htm",
  },
  {
    label: "National Kitchen & Bath Association: budget breakdown",
    href: "https://kitchencabinetkings.com/kitchen-remodel-cost-estimator",
  },
  {
    label: "HomeGuide: Quartz countertop cost (2026)",
    href: "https://homeguide.com/costs/quartz-countertops-cost",
  },
  {
    label: "SimplyWise: Cost to install kitchen cabinets (2026)",
    href: "https://www.simplywise.com/blog/cost-to-install-kitchen-cabinets/",
  },
];

const h2 =
  "text-[22px] font-bold leading-[1.2] tracking-[-.028em] text-ink sm:text-[26px]";
const p =
  "m-0 text-[16.5px] font-normal leading-[1.75] text-ink/[.82] sm:text-[17px]";

export default function GuidePage() {
  // Shared CTA card, used in the sticky right rail and inline on mobile.
  const cta = (
    <div className="rounded-2xl border border-ink/10 bg-surface p-5">
      <div className="text-[15px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
        Get a real number for your kitchen
      </div>
      <p className="m-0 mt-2 text-[13.5px] leading-[1.55] text-ink/[.62]">
        National averages are a starting point, not a quote. Nora scopes your
        project and lines up a licensed pro to price it around your home and ZIP.
      </p>
      <AskNora className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-[13.5px] font-semibold leading-none text-white transition-transform hover:scale-[1.02] hover:text-white">
        Ask Nora
        <span aria-hidden="true">→</span>
      </AskNora>
    </div>
  );

  return (
    <main className="w-full bg-white">
      <JsonLd data={GUIDE_SCHEMA} />
      <Header />

      <div className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 sm:py-[52px] lg:px-12">
        <div className="lg:grid lg:grid-cols-[190px_minmax(0,1fr)_260px] lg:gap-10 xl:gap-14">
          {/* LEFT: section skip index (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <GuideToc items={TOC} />
            </div>
          </aside>

          {/* CENTER: article */}
          <article className="mx-auto w-full max-w-[720px]">
            {/* Title block */}
            <div className="flex flex-col gap-5">
              <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-accent-link">
                Budgeting · 8 min read · Sep 2026
              </div>
              <h1 className="balance m-0 text-[32px] font-extrabold leading-[1.1] tracking-tighter2 text-ink sm:text-[44px] sm:leading-[1.08]">
                {GUIDE_TITLE}
              </h1>
              <p className="pretty m-0 text-[17px] font-normal leading-[1.6] text-ink/60 sm:text-[19px]">
                A mid-range kitchen is one of the few renovations that can pay for
                itself at resale. Here&apos;s what the national numbers say it
                costs, where the money goes, and the choices that keep it from
                ballooning.
              </p>
              <div className="flex items-center gap-3 border-y border-ink/10 py-4">
                <div className="text-[13.5px] font-semibold leading-[1.3] text-ink">
                  The MyHomeQuote Team
                </div>
                <span aria-hidden="true" className="text-ink/25">
                  ·
                </span>
                <div className="text-[12.5px] font-normal leading-[1.3] text-ink/[.6]">
                  Reviewed against 2025–2026 cost data
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="mt-6">
              <Placeholder
                src="/images/kitchen_guide.png"
                alt="A finished mid-range kitchen remodel with updated cabinets and countertops"
                sizes="(max-width: 768px) 100vw, 720px"
                className="h-[220px] w-full rounded-xl sm:h-[330px]"
              />
            </div>

            {/* Body */}
            <div className="mt-8 flex flex-col gap-8">
              <p className={p}>
                &ldquo;Mid-range&rdquo; is a fuzzy phrase until you put numbers on
                it. In the remodeling industry it lines up closely with what the
                annual Cost vs. Value Report calls a{" "}
                <em>minor kitchen remodel</em>: you keep the existing footprint,
                refresh or replace the cabinets, swap in new countertops and
                appliances, and update fixtures and finishes, without moving walls
                or plumbing. It&apos;s the version most first-time renovators
                actually do. It&apos;s also the version with the best return.
              </p>

              <section id="mid-range" className="flex scroll-mt-24 flex-col gap-4">
                <h2 className={h2}>What &ldquo;mid-range&rdquo; means</h2>
                <p className={p}>
                  A mid-range kitchen sits between two extremes. It&apos;s more
                  than a cosmetic refresh, you&apos;re not just painting cabinets
                  and calling it done, but it stops well short of a gut
                  renovation. In practice that means new or refaced cabinets, new
                  countertops, a fresh appliance suite, an updated sink and faucet,
                  lighting, flooring and paint. The one thing it leaves alone is
                  the layout: the sink, range and refrigerator stay roughly where
                  they are.
                </p>
                <p className={p}>
                  The step above it, a &ldquo;major&rdquo; midrange or upscale
                  remodel, moves that layout, adds an island with plumbing, opts
                  for custom cabinetry, and often takes a wall out. That version
                  can cost two to three times as much, which is exactly why the
                  line between them matters so much to your budget.
                </p>
              </section>

              <section id="cost-value" className="flex scroll-mt-24 flex-col gap-4">
                <h2 className={h2}>What it costs, and what it gives back</h2>
                <p className={p}>
                  The 2025 Cost vs. Value Report puts the national average for a
                  minor (mid-range) kitchen remodel at{" "}
                  <strong className="font-semibold text-ink">$28,458</strong>, up
                  about 3.5% year over year and roughly 21% over the last five
                  years. Prices vary by region and by how much of the work you
                  hand to a contractor, but that number is a fair national anchor.
                </p>
                <p className={p}>
                  Here&apos;s the part that surprises people: it tends to pay for
                  itself. The same report estimates a minor kitchen remodel adds
                  about{" "}
                  <strong className="font-semibold text-ink">$32,141</strong> in
                  resale value, a{" "}
                  <strong className="font-semibold text-ink">112.6% recoup</strong>{" "}
                  and the only interior remodeling project in the report to return
                  more than it costs. Regionally it swings higher still; in the
                  Pacific states (California, Oregon, Washington, Hawaii and
                  Alaska), the same project returns closer to 129%.
                </p>
                <p className={p}>
                  The lesson is counterintuitive: bigger isn&apos;t better for
                  return. An upscale, layout-changing kitchen can run well past
                  $150,000 and typically recoups only around 40% at resale.
                  Restraint is what makes the money come back.
                </p>
              </section>

              <section id="breakdown" className="flex scroll-mt-24 flex-col gap-4">
                <h2 className={h2}>Where the money goes</h2>
                <p className={p}>
                  The National Kitchen &amp; Bath Association&apos;s typical
                  budget breakdown explains why a few decisions matter so much.
                  Cabinets and hardware are the single biggest line at about 29%,
                  followed by installation labor at 17% and appliances and
                  ventilation at 14%. Countertops take roughly 10%. Everything
                  else (flooring, lighting, walls, design fees and plumbing
                  fixtures) splits the remaining third.
                </p>

                {/* Breakdown chart */}
                <div className="flex flex-col gap-[10px] rounded-xl border border-ink/10 bg-surface p-[22px]">
                  {BREAKDOWN.map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <span className="w-[104px] flex-none font-mono text-[11px] font-medium leading-none text-ink/60 sm:w-[132px] sm:text-[12px]">
                        {row.label}
                      </span>
                      <span className="relative h-[10px] flex-1 rounded-[5px] bg-ink/[.08]">
                        <span
                          className="absolute inset-y-0 left-0 rounded-[5px]"
                          style={{ width: `${row.pct}%`, background: row.bar }}
                        />
                      </span>
                      <span className="w-[38px] flex-none text-right font-mono text-[12px] font-medium leading-none text-ink sm:w-[44px]">
                        {row.pct}%
                      </span>
                    </div>
                  ))}
                  <div className="mt-1 font-mono text-[10px] leading-none text-ink/40">
                    Source: NKBA recommended budget allocation
                  </div>
                </div>

                <p className={p}>
                  Three categories, cabinets, labor and appliances, eat roughly
                  60% of the budget between them. That&apos;s the good news:
                  it means a handful of choices in those areas move the total far
                  more than sweating the small stuff.
                </p>
              </section>

              <section id="layout" className="flex scroll-mt-24 flex-col gap-4">
                <h2 className={h2}>The real budget-buster: moving things</h2>
                <p className={p}>
                  The single biggest reason a &ldquo;minor&rdquo; remodel quietly
                  becomes a major one is relocating the sink, the range, or a
                  wall. The moment plumbing, gas or electrical has to move, you add
                  licensed trades, permits, and usually drywall and flooring
                  patching, and you cross from the ~$28,000 tier into the
                  $50,000-plus tier.
                </p>
                <blockquote className="border-l-[3px] border-accent pl-4 text-[19px] font-semibold leading-[1.45] tracking-[-.02em] text-ink sm:pl-[22px] sm:text-[22px]">
                  If you can live with the current layout, your budget will thank
                  you. Keep the wet wall where it is.
                </blockquote>
                <p className={p}>
                  It&apos;s worth deciding this first, before you fall for a
                  render with the island somewhere new. A better work triangle is
                  sometimes worth the cost. But go in knowing that moving the sink
                  three feet is one of the most expensive three feet in the house.
                </p>
              </section>

              <section id="trade-offs" className="flex scroll-mt-24 flex-col gap-4">
                <h2 className={h2}>Three smart trade-offs</h2>
                <p className={p}>
                  <strong className="font-semibold text-ink">Cabinets.</strong>{" "}
                  The mid-range sweet spot is semi-custom. Stock cabinets run about
                  $100–$400 per linear foot installed, semi-custom $150–$700, and
                  fully custom $500–$1,200 and up. If your existing boxes are
                  solid, refacing (new doors, drawer fronts and veneer) gets you a
                  new look for a fraction of full replacement.
                </p>
                <p className={p}>
                  <strong className="font-semibold text-ink">Countertops.</strong>{" "}
                  Quartz is the mid-range default at roughly $50–$150 per square
                  foot installed, with most homeowners landing between $70 and
                  $100. A mid-tier quartz reads as premium; save the exotic slabs
                  for a splurge kitchen.
                </p>
                <p className={p}>
                  <strong className="font-semibold text-ink">
                    Spend on touch, save on show.
                  </strong>{" "}
                  Put money into the things your hands are on every day, the
                  faucet, the drawer hardware, a good deep sink, and skip the pot
                  filler and the second dishwasher you saw online. The upgrades you
                  feel daily are the ones you never regret.
                </p>

                <Placeholder
                  src="/images/cabinet.png"
                  alt="Close-up of kitchen cabinet doors and hardware"
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="my-1 h-[230px] rounded-xl"
                />
              </section>

              <section id="buffer" className="flex scroll-mt-24 flex-col gap-4">
                <h2 className={h2}>Build in a buffer</h2>
                <p className={p}>
                  The NKBA suggests budgeting somewhere between 10% and 25% of your
                  home&apos;s value for a kitchen, and setting aside a contingency
                  of around 20% before you start. Once
                  the walls open, older homes routinely turn up out-of-code wiring,
                  hidden water damage, or floors that aren&apos;t level, none of
                  which show up on the original estimate. The buffer is what keeps
                  a surprise from becoming a stall.
                </p>
                <p className={p}>
                  One more habit worth keeping: if your number is firm, say so in
                  the first conversation. A good contractor will tell you what
                  falls off the list to hit it. A quote that arrives without that
                  conversation is a quote that will grow.
                </p>
                <p className={p}>
                  A mid-range kitchen is the rare renovation where discipline pays
                  twice: it costs less up front and returns more at resale. Keep
                  the layout, put the money into cabinets and the surfaces you
                  touch, and hold a little back for what the walls are hiding.
                </p>
              </section>

              <section id="sources" className="flex scroll-mt-24 flex-col gap-3 border-t border-ink/10 pt-6">
                <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-ink/45">
                  Sources
                </div>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {SOURCES.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13.5px] leading-[1.5] text-accent-link underline decoration-ink/20 underline-offset-2 hover:decoration-accent"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="m-0 text-[12.5px] leading-[1.6] text-ink/[.5]">
                  Figures are national averages and vary by region, materials and
                  contractor. Use them to plan, not to quote.
                </p>
              </section>

              {/* CTA: inline on mobile/tablet (the right rail covers desktop) */}
              <div className="lg:hidden">{cta}</div>
            </div>
          </article>

          {/* RIGHT: consultation CTA (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-10">{cta}</div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
