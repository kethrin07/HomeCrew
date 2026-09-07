import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Placeholder } from "@/components/Placeholder";
import { AvaComposer } from "@/components/AvaComposer";
import { BeforeAfter } from "@/components/BeforeAfter";
import { AskAvaPill } from "@/components/AskAvaPill";

const TRUST = [
  "Licence verified",
  "Insurance on file",
  "Background checked",
  "Workmanship warranty",
];

const STEPS = [
  {
    n: "01",
    media: "chat + voice, in the hero",
    title: "Talk to Ava",
    body: "Type it or say it out loud, and send photos if you have them. Ava asks about scope, timing and budget — no 14-field form.",
  },
  {
    n: "02",
    media: "expert on a video call",
    title: "Get an appointment with an expert",
    body: "Ava lines up a licensed pro and locks in a time that suits you — on site or on a call. No waiting around, no phone tag.",
  },
  {
    n: "03",
    media: "itemised quote",
    title: "Get a personalized quote",
    body: "Your expert scopes the job with you and hands over a clear, itemised quote built around your home, your ZIP code and your budget.",
  },
];

const BLOG_TOPICS = [
  { tag: "Bathrooms", title: "Bathroom remodel costs, broken down fixture by fixture" },
  { tag: "Roofing", title: "Repair or replace? How to read the age of your roof" },
  { tag: "Resale", title: "Kitchen vs. bathroom: which remodel adds more value?" },
  { tag: "Quick wins", title: "Five small upgrades that make an older home feel new" },
  { tag: "Budgeting", title: "How to budget a whole-home renovation without surprises" },
  { tag: "Electrical", title: "Signs your home's wiring is due for an upgrade" },
  { tag: "Outdoor", title: "Deck materials compared: wood vs. composite vs. PVC" },
  { tag: "Planning", title: "What to expect during a renovation, week by week" },
  { tag: "Energy", title: "Insulation and windows: where your money actually goes" },
];

const CATEGORIES = [
  { name: "Kitchens", range: "$18k–$65k" },
  { name: "Bathrooms", range: "$9k–$30k" },
  { name: "Roof & gutters", range: "$7k–$24k" },
  { name: "Decks & yards", range: "$5k–$28k" },
];

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote:
      "I sent one message at 9pm and had two contractors booked for Thursday. That has never happened to me before.",
    name: "Priya N.",
    meta: "Bathroom · Austin",
    avatar: "oklch(0.88 0.03 165)",
  },
  {
    stars: "★★★★★",
    quote:
      "First house, no idea what anything costs. The price bands stopped me getting talked into a $60k kitchen.",
    name: "Marcus T.",
    meta: "Kitchen · Columbus",
    avatar: "oklch(0.84 0.04 200)",
  },
  {
    stars: "★★★★☆",
    quote:
      "Wanted a human, got one — the agent handed me to a real coordinator when my roof turned out to be structural.",
    name: "Dana R.",
    meta: "Roofing · Portland",
    avatar: "oklch(0.86 0.04 60)",
  },
];

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* Hero */}
      <section className="grid grid-cols-1 items-center gap-[52px] bg-surface px-8 py-[72px] sm:px-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-accent-link">
            Matched in one conversation
          </div>
          <h1 className="balance m-0 text-[44px] font-extrabold leading-[1.03] tracking-tighter2 text-ink sm:text-[58px]">
            Tell us the project.
            <br />
            We&apos;ll bring the pros.
          </h1>
          <p className="pretty m-0 max-w-[420px] text-[16.5px] font-normal leading-[1.6] text-ink/[.62]">
            Describe what you want done and Ava lines up three licensed pros with
            real quotes. No forms, no call centre, no chasing.
          </p>

          <AvaComposer />

          <div className="flex items-center gap-4">
            <div className="flex">
              <div className="h-7 w-7 rounded-full border-2 border-surface" style={{ background: "oklch(0.88 0.03 165)" }} />
              <div className="-ml-[9px] h-7 w-7 rounded-full border-2 border-surface" style={{ background: "oklch(0.84 0.04 200)" }} />
              <div className="-ml-[9px] h-7 w-7 rounded-full border-2 border-surface" style={{ background: "oklch(0.86 0.04 60)" }} />
            </div>
            <div className="text-[13px] font-normal leading-[1.4] text-ink/[.58]">
              <strong className="font-semibold text-ink">4.8</strong> from 12,400
              homeowners
            </div>
          </div>
        </div>

        <div className="grid h-full min-h-[440px] grid-cols-2 grid-rows-[1.5fr_1fr] gap-3 lg:min-h-[520px]">
          <Placeholder label="video — finished kitchen walkthrough" className="col-span-2 rounded-xl" />
          <Placeholder label="pro on site" className="rounded-xl" />
          <Placeholder label="bath detail" className="rounded-xl" />
        </div>
      </section>

      {/* Trust bar */}
      <section className="flex flex-wrap items-center justify-between gap-x-[44px] gap-y-4 border-y border-line px-8 py-[30px] sm:px-12">
        <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-ink/40">
          Every pro on HomeCrew
        </div>
        <div className="flex flex-wrap gap-x-[34px] gap-y-2 text-[13.5px] font-medium leading-none text-ink/[.68]">
          {TRUST.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="flex flex-col gap-10 bg-white px-8 py-[74px] sm:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end sm:gap-12">
          <div className="flex flex-col gap-[14px]">
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
              How it works
            </div>
            <h2 className="balance m-0 max-w-[560px] text-[42px] font-bold leading-[1.08] tracking-[-.032em] text-ink">
              Talk to Ava, meet an expert, and get a quote built for your home
            </h2>
          </div>
          <p className="m-0 max-w-[300px] text-[14.5px] font-normal leading-[1.65] text-ink/[.58]">
            A few minutes with Ava, an expert booked the same day, and a real
            quote in your hands. Nothing to fill in twice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-accent font-mono text-[11.5px] font-medium leading-none text-white">
                  {s.n}
                </div>
                <div className="h-px flex-1 bg-ink/[.12]" />
              </div>
              <Placeholder label={s.media} className="h-[158px] rounded-xl" />
              <div className="text-[21px] font-bold leading-[1.25] tracking-[-.022em] text-ink">
                {s.title}
              </div>
              <p className="pretty m-0 text-[15px] font-normal leading-[1.65] text-ink/[.62]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 rounded-[14px] border border-ink/10 bg-surface px-[26px] py-[22px] sm:flex-row sm:items-center sm:gap-8">
          <div className="text-[15px] font-medium leading-[1.5] text-ink/[.72]">
            Book a time that suits you and get a written quote — no pressure to
            commit until you&apos;re ready.
          </div>
          <Link
            href="/ava"
            className="flex-none rounded-[10px] bg-accent px-[22px] py-[14px] text-[14.5px] font-semibold leading-[1.2] text-white hover:text-white"
          >
            Start with Ava
          </Link>
        </div>
      </section>

      <BeforeAfter />

      {/* Categories */}
      <section id="categories" className="flex flex-col gap-[22px] px-8 pb-[66px] sm:px-12">
        <div className="flex items-end justify-between">
          <h2 className="m-0 text-[38px] font-bold leading-[1.1] tracking-[-.03em] text-ink">
            Start where you are
          </h2>
          <Link href="/#categories" className="text-[13.5px] font-semibold leading-none text-accent-link">
            All 34 categories →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              href="/ava"
              key={c.name}
              className="overflow-hidden rounded-xl border border-line transition-shadow hover:shadow-card"
            >
              <Placeholder className="h-[132px]" align="none" />
              <div className="px-4 py-[14px]">
                <div className="text-[15.5px] font-semibold leading-[1.3] text-ink">
                  {c.name}
                </div>
                <div className="mt-[6px] font-mono text-[11.5px] font-medium leading-none text-ink/45">
                  {c.range}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col gap-[26px] bg-surface px-8 py-[60px] sm:px-12">
        <h2 className="m-0 text-[34px] font-bold leading-[1.1] tracking-[-.03em] text-ink">
          What homeowners said
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-[14px] rounded-[14px] border border-line bg-white p-[22px]"
            >
              <div className="font-mono text-[13px] font-medium leading-none tracking-[.08em] text-accent-link">
                {t.stars}
              </div>
              <p className="m-0 text-[15px] font-normal leading-[1.6] text-ink/75">
                {t.quote}
              </p>
              <div className="mt-auto flex items-center gap-[10px]">
                <div className="h-[30px] w-[30px] rounded-full" style={{ background: t.avatar }} />
                <div>
                  <div className="text-[13px] font-semibold leading-[1.3] text-ink">
                    {t.name}
                  </div>
                  <div className="text-[12px] font-normal leading-[1.3] text-ink/50">
                    {t.meta}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section id="projects" className="flex flex-col gap-6 px-8 py-[66px] sm:px-12">
        <div className="flex items-end justify-between">
          <h2 className="m-0 text-[38px] font-bold leading-[1.1] tracking-[-.03em] text-ink">
            Read before you renovate
          </h2>
          <Link href="/guides/kitchen-30k" className="text-[13.5px] font-semibold leading-none text-accent-link">
            All guides →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[1.6fr_1fr_1fr]">
          <Link href="/guides/kitchen-30k" className="flex flex-col gap-[14px]">
            <Placeholder className="h-[230px] rounded-xl" align="none" />
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
              Budgeting · 7 min
            </div>
            <div className="max-w-[440px] text-[25px] font-bold leading-[1.22] tracking-[-.025em] text-ink">
              What a $30,000 kitchen actually buys you in 2026
            </div>
          </Link>
          <div className="flex flex-col gap-3">
            <Placeholder className="h-[130px] rounded-xl" align="none" />
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
              Hiring · 5 min
            </div>
            <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
              Nine questions to ask before you sign a contract
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Placeholder className="h-[130px] rounded-xl" align="none" />
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
              Permits · 4 min
            </div>
            <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
              Which jobs need a permit, by state
            </div>
          </div>
        </div>

        {/* More example blog topics */}
        <div className="mt-4 flex flex-col gap-[18px] border-t border-line pt-8">
          <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
            More on the blog
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_TOPICS.map((t) => (
              <Link
                key={t.title}
                href="/guides/kitchen-30k"
                className="group flex flex-col gap-[6px] border-t border-ink/[.06] pt-[14px]"
              >
                <span className="font-mono text-[10px] font-medium uppercase leading-none tracking-[.1em] text-ink/40">
                  {t.tag}
                </span>
                <span className="text-[15.5px] font-semibold leading-[1.35] tracking-[-.015em] text-ink transition-colors group-hover:text-accent-link">
                  {t.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AskAvaPill />

      {/* Dark CTA */}
      <section className="flex flex-col items-start justify-between gap-8 bg-ink px-8 py-[56px] sm:flex-row sm:items-center sm:gap-10 sm:px-12">
        <div className="flex flex-col gap-3">
          <h2 className="m-0 max-w-[520px] text-[34px] font-bold leading-[1.12] tracking-[-.03em] text-white">
            Still just thinking about it? Ask anyway.
          </h2>
          <p className="m-0 max-w-[440px] text-[15px] font-normal leading-[1.6] text-white/[.66]">
            Ava will scope it, price it, and leave you alone until you&apos;re
            ready.
          </p>
        </div>
        <div className="flex flex-none gap-[10px]">
          <Link
            href="/ava"
            className="rounded-[10px] bg-white px-[22px] py-[15px] text-[14.5px] font-semibold leading-none text-ink hover:text-ink"
          >
            Start a chat
          </Link>
          <Link
            href="/ava"
            className="rounded-[10px] border border-white/[.28] bg-transparent px-[22px] py-[15px] text-[14.5px] font-semibold leading-none text-white hover:text-white"
          >
            Talk to Ava
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
