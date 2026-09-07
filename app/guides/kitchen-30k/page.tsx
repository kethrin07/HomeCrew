import Link from "next/link";
import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import { AskAvaPill } from "@/components/AskAvaPill";

export const metadata: Metadata = {
  title: "What a $30,000 kitchen actually buys you in 2026 — HomeCrew Guides",
  description:
    "We pulled the line items from 214 finished kitchens under $35,000 and broke down where the money went.",
};

const BREAKDOWN = [
  { label: "Cabinets", pct: 31, bar: "oklch(0.52 0.13 165)" },
  { label: "Labour", pct: 24, bar: "oklch(0.58 0.11 165)" },
  { label: "Counters", pct: 17, bar: "oklch(0.64 0.09 165)" },
  { label: "Appliances", pct: 14, bar: "oklch(0.70 0.07 165)" },
  { label: "Everything else", pct: 14, bar: "rgba(20,23,26,.25)" },
];

const KEEP_READING = [
  "Nine questions to ask before you sign a contract",
  "Cabinet refacing vs. replacement, by the numbers",
];

export default function GuidePage() {
  return (
    <main className="mx-auto my-0 max-w-[820px] overflow-hidden bg-white sm:my-8 sm:rounded-[10px] sm:border sm:border-line sm:shadow-card">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-line px-[30px] py-[18px]">
        <Link href="/" className="text-[17px] font-extrabold leading-none tracking-[-.03em] text-ink hover:text-ink">
          HomeCrew <span className="font-medium text-ink/45">Guides</span>
        </Link>
        <Link
          href="/ava"
          className="rounded-lg bg-ink px-[15px] py-[9px] text-[12.5px] font-semibold leading-none text-white hover:text-white"
        >
          Get matched
        </Link>
      </header>

      {/* Reading progress */}
      <div className="h-[3px] bg-ink/[.07]">
        <div className="h-[3px] w-[34%] bg-accent" />
      </div>

      {/* Title block */}
      <div className="flex flex-col items-center px-[30px] pb-[10px] pt-[52px]">
        <div className="flex w-full max-w-[620px] flex-col gap-5">
          <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-accent-link">
            Budgeting · 7 min read · Feb 2026
          </div>
          <h1 className="balance m-0 text-[44px] font-extrabold leading-[1.08] tracking-tighter2 text-ink">
            What a $30,000 kitchen actually buys you in 2026
          </h1>
          <p className="pretty m-0 text-[19px] font-normal leading-[1.6] text-ink/60">
            We pulled the line items from 214 finished kitchens under $35,000 and
            broke down where the money went.
          </p>
          <div className="flex items-center gap-3 border-y border-ink/10 py-4">
            <div className="h-[34px] w-[34px] rounded-full" style={{ background: "oklch(0.88 0.03 165)" }} />
            <div>
              <div className="text-[13.5px] font-semibold leading-[1.3] text-ink">
                Renée Okafor
              </div>
              <div className="text-[12.5px] font-normal leading-[1.3] text-ink/[.52]">
                Estimator, 11 years in residential build
              </div>
            </div>
            <div className="ml-auto flex gap-2">
              {["↗", "✎"].map((g) => (
                <span
                  key={g}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-ink/[.12] font-mono text-[11px] font-medium leading-none text-ink/50"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="flex justify-center px-[30px] pb-6">
        <Placeholder label="hero photo — mid-budget kitchen, wide" className="h-[330px] w-full rounded-xl" />
      </div>

      {/* Body */}
      <article className="flex flex-col items-center px-[30px] pb-[56px] pt-4">
        <div className="flex w-full max-w-[620px] flex-col gap-[22px]">
          <p className="m-0 text-[17.5px] font-normal leading-[1.75] text-ink/[.82]">
            Thirty thousand dollars is the number most first-time renovators land
            on. It is enough to change how a kitchen works, and not quite enough
            to change where its walls are. The projects in our sample that came in
            on budget had one thing in common: the plumbing stayed where it was.
          </p>

          <h2 className="mt-[14px] text-[26px] font-bold leading-[1.2] tracking-[-.028em] text-ink">
            Where the money went
          </h2>
          <p className="m-0 text-[17.5px] font-normal leading-[1.75] text-ink/[.82]">
            Cabinets took the largest share at 31%, followed by labour at 24%.
            Counters, appliances and lighting split most of the rest. Permits and
            disposal are small on paper and reliably forgotten.
          </p>

          {/* Breakdown chart */}
          <div className="flex flex-col gap-[10px] rounded-xl border border-ink/10 bg-surface p-[22px]">
            {BREAKDOWN.map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <span className="w-[120px] flex-none font-mono text-[12px] font-medium leading-none text-ink/60">
                  {row.label}
                </span>
                <span className="relative h-[10px] flex-1 rounded-[5px] bg-ink/[.08]">
                  <span
                    className="absolute inset-y-0 left-0 rounded-[5px]"
                    style={{ width: `${row.pct}%`, background: row.bar }}
                  />
                </span>
                <span className="w-[44px] text-right font-mono text-[12px] font-medium leading-none text-ink">
                  {row.pct}%
                </span>
              </div>
            ))}
          </div>

          <blockquote className="my-[14px] border-l-[3px] border-accent pl-[22px] text-[22px] font-semibold leading-[1.45] tracking-[-.02em] text-ink">
            Every kitchen that blew its budget moved a sink. Not one of the
            on-budget projects did.
          </blockquote>

          <h2 className="mt-[14px] text-[26px] font-bold leading-[1.2] tracking-[-.028em] text-ink">
            The three trade-offs worth making
          </h2>
          <p className="m-0 text-[17.5px] font-normal leading-[1.75] text-ink/[.82]">
            Keep the layout, upgrade the boxes. Choose a mid-tier quartz over a
            low-tier stone. Spend on the hardware you touch fifty times a day, and
            skip the pot filler.
          </p>

          <Placeholder label="photo — cabinet hardware detail" className="my-[6px] h-[230px] rounded-xl" />

          <p className="m-0 text-[17.5px] font-normal leading-[1.75] text-ink/[.82]">
            If your number is firm, say so in the first conversation. Good pros
            will tell you what falls off the list, and a quote that arrives
            without that conversation is a quote that will grow.
          </p>

          {/* Inline CTA */}
          <div className="mt-5 flex items-center gap-[22px] rounded-[14px] bg-ink p-[26px]">
            <div className="flex-1">
              <div className="text-[20px] font-bold leading-[1.3] tracking-[-.02em] text-white">
                Want this priced for your kitchen?
              </div>
              <div className="mt-[6px] text-[14px] font-normal leading-[1.55] text-white/[.66]">
                Ava uses your ZIP and square footage, not a national average.
              </div>
            </div>
            <Link
              href="/ava"
              className="flex-none rounded-[9px] bg-white px-5 py-[13px] text-[13.5px] font-semibold leading-none text-ink hover:text-ink"
            >
              Ask Ava
            </Link>
          </div>

          {/* Keep reading */}
          <div className="mt-[26px] border-t border-ink/10 pt-[26px]">
            <div className="mb-4 font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-ink/[.42]">
              Keep reading
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {KEEP_READING.map((title) => (
                <div key={title} className="flex flex-col gap-[10px]">
                  <Placeholder className="h-[110px] rounded-[10px]" align="none" />
                  <div className="text-[15.5px] font-semibold leading-[1.35] text-ink">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <AskAvaPill />
      <div className="pb-[34px]" />
    </main>
  );
}
