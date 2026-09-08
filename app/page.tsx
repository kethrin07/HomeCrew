import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Placeholder } from "@/components/Placeholder";
import { HeroChat } from "@/components/HeroChat";
import { BeforeAfter } from "@/components/BeforeAfter";

const STEPS = [
  {
    n: "01",
    media: "chat + voice, in the hero",
    img: "/images/chat-voice.png",
    title: "Talk to Nora",
    body: "Type it or say it out loud, and send photos if you have them. Nora asks about scope, timing and budget — no 14-field form.",
  },
  {
    n: "02",
    media: "expert on a video call",
    img: "/images/expert-video-call.png",
    title: "Get an appointment with an expert",
    body: "Nora lines up a licensed pro and locks in a time that suits you — on site or on a call. No waiting around, no phone tag.",
  },
  {
    n: "03",
    media: "itemised quote",
    img: "/images/itemised-quote.png",
    title: "Get a personalized quote",
    body: "Your expert scopes the job with you and hands over a clear, itemised quote built around your home, your ZIP code and your budget.",
  },
];

const TRUST = ["Licence checked", "Insured on file", "2-year warranty"];

function trustIcon(i: number) {
  if (i === 0)
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (i === 1)
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.5l2.1 6.4h6.7l-5.4 4 2 6.4-5.4-4-5.4 4 2-6.4-5.4-4h6.7z" />
      </svg>
    );
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l7.5 3.2v5.5c0 4.5-3.1 8.2-7.5 9.3-4.4-1.1-7.5-4.8-7.5-9.3V5.7z" />
    </svg>
  );
}

const BLOG_TOPICS = [
  { tag: "Bathrooms", title: "What $15k covers in a bathroom remodel, fixture by fixture" },
  { tag: "Roofing", title: "Repair or replace? Five signs your roof is out of time" },
  { tag: "Resale", title: "Kitchen vs. bathroom: which remodel actually pays back at resale" },
  { tag: "Quick wins", title: "Seven upgrades under $500 that make an older home feel new" },
  { tag: "Budgeting", title: "Build a renovation budget with a buffer that actually holds" },
  { tag: "Electrical", title: "Six warning signs your home's wiring is overdue" },
  { tag: "Outdoor", title: "Deck materials, 10-year cost compared: wood vs. composite vs. PVC" },
  { tag: "Planning", title: "A realistic renovation timeline, week by week" },
  { tag: "Energy", title: "Insulation or new windows: where your money saves more" },
];

const CATEGORIES = [
  { name: "Kitchens", range: "$18k–$65k", img: "/images/kitchens.png" },
  { name: "Bathrooms", range: "$9k–$30k", img: "/images/bathrooms.png" },
  { name: "Roof & gutters", range: "$7k–$24k", img: "/images/roof-and-gutters.png" },
  { name: "Decks & yards", range: "$5k–$28k", img: "/images/decks-and-yards.png" },
];

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote:
      "I sent one message at 9pm and had two contractors booked for Thursday. That has never happened to me before.",
    name: "Priya N.",
    meta: "Bathroom · Austin",
    img: "/images/priya.png",
  },
  {
    stars: "★★★★★",
    quote:
      "First house, no idea what anything costs. The price bands stopped me getting talked into a $60k kitchen.",
    name: "Marcus T.",
    meta: "Kitchen · Columbus",
    img: "/images/marcus.png",
  },
  {
    stars: "★★★★☆",
    quote:
      "Wanted a human, got one — the agent handed me to a real coordinator when my roof turned out to be structural.",
    name: "Dana R.",
    meta: "Roofing · Portland",
    img: "/images/dana.png",
  },
];

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-surface">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        {/* Dark photo hero */}
        <Image
          src="/images/kitch-reno.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />

        {/* Video label chip */}
        <div className="absolute right-5 top-5 z-10 hidden sm:block lg:right-8">
          <span className="rounded-full bg-ink/70 px-3 py-1.5 font-mono text-[9.5px] font-medium uppercase tracking-[.14em] text-white/70">
            video — kitchen walkthrough, muted loop
          </span>
        </div>

        <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-14 lg:px-12 lg:py-24">
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <div className="font-mono text-[11px] font-medium uppercase leading-none tracking-[.2em] text-accent-soft">
              Matched in one conversation
            </div>
            <h1 className="balance m-0 text-[42px] font-semibold leading-[.98] tracking-[.005em] text-white sm:text-[58px] lg:text-[68px]">
              Tell us the project.
              <br />
              We&apos;ll bring the pros.
            </h1>
            <p className="pretty m-0 max-w-[420px] text-[16.5px] font-normal leading-[1.6] text-white/[.82] sm:text-[17.5px]">
              Nora lines up three licensed pros with real quotes — chat or call
              her right here. No forms, no call centre, no chasing.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
              <div className="flex items-center gap-2">
                <span className="tracking-[.15em] text-accent-soft">★★★★★</span>
                <span className="text-white/80">
                  <strong className="font-semibold text-white">4.8</strong> from 12,400
                  homeowners
                </span>
              </div>
              <span className="text-white/55">Licensed &amp; insured only</span>
            </div>
          </div>

          {/* Chat card */}
          <div className="lg:justify-self-end">
            <HeroChat />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-olive px-5 py-12 sm:px-8 sm:py-[60px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-10">
          {/* Centered header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="font-mono text-[12px] font-medium uppercase leading-none tracking-[.18em] text-accent-soft">
              How it works
            </div>
            <h2 className="balance m-0 max-w-[640px] text-[26px] font-semibold leading-[1.1] tracking-[.005em] text-white sm:text-[32px] lg:text-[36px]">
              Talk to Nora, meet an expert, and get a quote built for your home
            </h2>
            <p className="pretty m-0 max-w-[460px] text-[16px] font-normal leading-[1.6] text-white/80">
              A few minutes with Nora, an expert booked the same day, and a real
              quote in your hands. Nothing to fill in twice.
            </p>
          </div>

          {/* Steps */}
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
            {STEPS.map((s) => (
              <div key={s.n} className="flex flex-col gap-3">
                <Placeholder src={s.img} alt={s.media} className="h-[180px] rounded-xl" />
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[14px] font-semibold leading-none text-accent-soft">
                    {s.n}
                  </span>
                  <span className="font-mono text-[14px] font-semibold uppercase leading-none tracking-[.08em] text-accent-soft">
                    {s.title}
                  </span>
                </div>
                <p className="pretty m-0 text-[15.5px] font-normal leading-[1.6] text-white/85">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <p className="m-0 max-w-[440px] text-center text-[15px] font-medium leading-[1.55] text-white/80">
              Book a time that suits you and get a written quote — no pressure to
              commit until you&apos;re ready.
            </p>
            <Link
              href="/ava"
              className="rounded-[10px] bg-accent px-7 py-4 text-[14px] font-semibold uppercase leading-none tracking-[.06em] text-white transition-transform hover:scale-[1.02] hover:text-white"
            >
              Start with Nora
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid w-full max-w-[720px] grid-cols-1 gap-3.5 sm:grid-cols-3">
            {TRUST.map((t, i) => (
              <div
                key={t}
                className="flex items-center justify-center gap-2 rounded-xl bg-sand px-4 py-4 text-center"
              >
                <span className="text-accent">{trustIcon(i)}</span>
                <span className="font-mono text-[13px] font-semibold uppercase leading-none tracking-[.1em] text-accent-dark">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />

      {/* Categories */}
      <section id="categories" className="px-5 pb-14 pt-14 sm:px-8 sm:pb-[66px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[22px]">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.01em] text-olive-dark sm:text-[34px] lg:text-[38px]">
              Start where you are
            </h2>
            <Link href="/#categories" className="text-[14px] font-semibold leading-none text-accent-link">
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
                <Placeholder src={c.img} alt={c.name} className="h-[132px]" />
                <div className="bg-canvas px-4 py-[14px]">
                  <div className="text-[15.5px] font-semibold leading-[1.3] text-ink">
                    {c.name}
                  </div>
                  <div className="mt-[6px] font-mono text-[12px] font-semibold leading-none tracking-[.04em] text-accent">
                    {c.range}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-canvas px-5 py-14 sm:px-8 sm:py-[60px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[26px]">
          <h2 className="m-0 text-[26px] font-bold leading-[1.1] tracking-[-.01em] text-olive-dark sm:text-[30px] lg:text-[34px]">
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
                <p className="m-0 text-[16px] font-normal leading-[1.6] text-ink/80">
                  {t.quote}
                </p>
                <div className="mt-auto flex items-center gap-[10px]">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={34}
                    height={34}
                    className="h-[34px] w-[34px] rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[14px] font-semibold leading-[1.3] text-ink">
                      {t.name}
                    </div>
                    <div className="text-[13px] font-normal leading-[1.3] text-ink/60">
                      {t.meta}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="blog" className="bg-canvas px-5 py-14 sm:px-8 sm:py-[66px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.01em] text-olive-dark sm:text-[34px] lg:text-[38px]">
              Read before you renovate
            </h2>
            <Link href="/guides/kitchen-30k" className="text-[14px] font-semibold leading-none text-accent-link">
              All guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[1.6fr_1fr_1fr]">
            <Link href="/guides/kitchen-30k" className="flex flex-col gap-[14px]">
              <Placeholder className="h-[200px] rounded-xl sm:h-[230px]" align="none" />
              <div className="font-mono text-[11.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                Budgeting · 7 min
              </div>
              <div className="max-w-[440px] text-[22px] font-bold leading-[1.22] tracking-[-.025em] text-ink sm:text-[25px]">
                What a $30,000 kitchen actually buys you in 2026
              </div>
            </Link>
            <div className="flex flex-col gap-3">
              <Placeholder className="h-[130px] rounded-xl" align="none" />
              <div className="font-mono text-[11.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                Hiring · 5 min
              </div>
              <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
                Nine questions to ask before you sign a contract
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Placeholder className="h-[130px] rounded-xl" align="none" />
              <div className="font-mono text-[11.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                Permits · 4 min
              </div>
              <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
                Which jobs need a permit, by state
              </div>
            </div>
          </div>

          {/* More example blog topics */}
          <div className="mt-4 flex flex-col gap-[18px] border-t border-line pt-8">
            <div className="font-mono text-[11.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
              More on the blog
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-[14px] sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_TOPICS.map((t) => (
                <Link
                  key={t.title}
                  href="/guides/kitchen-30k"
                  className="group flex flex-col gap-[6px] border-t border-ink/[.06] pt-[14px]"
                >
                  <span className="font-mono text-[11.5px] font-medium uppercase leading-none tracking-[.1em] text-accent">
                    {t.tag}
                  </span>
                  <span className="text-[16px] font-semibold leading-[1.4] tracking-[-.005em] text-ink transition-colors group-hover:text-accent-link">
                    {t.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-olive-dark px-5 py-14 sm:px-8 sm:py-[56px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center sm:gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="m-0 max-w-[520px] text-[27px] font-bold leading-[1.12] tracking-[-.03em] text-white sm:text-[34px]">
              Still just thinking about it? Ask anyway.
            </h2>
            <p className="m-0 max-w-[440px] text-[16.5px] font-normal leading-[1.6] text-white/[.78]">
              Nora will scope it, price it, and leave you alone until you&apos;re
              ready.
            </p>
          </div>
          <div className="flex w-full flex-col gap-[10px] sm:w-auto sm:flex-none sm:flex-row">
            <Link
              href="/ava"
              className="rounded-[10px] bg-accent px-[22px] py-[15px] text-center text-[14.5px] font-semibold leading-none text-white hover:text-white"
            >
              Start a chat
            </Link>
            <Link
              href="/ava"
              className="rounded-[10px] border border-white/[.28] bg-transparent px-[22px] py-[15px] text-center text-[14.5px] font-semibold leading-none text-white hover:text-white"
            >
              Talk to Nora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
