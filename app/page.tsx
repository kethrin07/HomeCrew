import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Placeholder } from "@/components/Placeholder";
import { NoraComposer } from "@/components/NoraComposer";
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

const BLOG_TOPICS = [
  { tag: "Bathrooms", title: "What a mid-range bathroom remodel covers, fixture by fixture" },
  { tag: "Roofing", title: "Repair or replace? Five signs your roof is out of time" },
  { tag: "Resale", title: "Kitchen vs. bathroom: which remodel actually pays back at resale" },
  { tag: "Quick wins", title: "Seven low-cost upgrades that make an older home feel new" },
  { tag: "Budgeting", title: "Build a renovation budget with a buffer that actually holds" },
  { tag: "Electrical", title: "Six warning signs your home's wiring is overdue" },
  { tag: "Outdoor", title: "Deck materials, 10-year cost compared: wood vs. composite vs. PVC" },
  { tag: "Planning", title: "A realistic renovation timeline, week by week" },
  { tag: "Energy", title: "Insulation or new windows: where your money saves more" },
];

const CATEGORIES = [
  { name: "Kitchens", img: "/images/kitchens.png" },
  { name: "Bathrooms", img: "/images/bathrooms.png" },
  { name: "Roof & gutters", img: "/images/roof-and-gutters.png" },
  { name: "Decks & yards", img: "/images/decks-and-yards.png" },
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
      "First house, no idea what anything costs. Nora's guidance stopped me getting talked into a kitchen I didn't need.",
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
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-surface px-5 py-14 sm:px-8 sm:py-[72px] lg:px-12">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[52px]">
          <div className="flex flex-col gap-6">
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-accent-link">
              Matched in one conversation
            </div>
            <h1 className="balance m-0 text-[34px] font-extrabold leading-[1.05] tracking-tighter2 text-ink sm:text-[44px] lg:text-[58px]">
              Tell us the project.
              <br />
              We&apos;ll bring the pros.
            </h1>
            <p className="pretty m-0 max-w-[420px] text-[15.5px] font-normal leading-[1.6] text-ink/[.62] sm:text-[16.5px]">
              Describe what you want done and Nora lines up three licensed pros with
              real quotes. No forms, no call centre, no chasing.
            </p>

            <NoraComposer />

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

          <div className="grid h-full min-h-[320px] grid-cols-2 grid-rows-[1.5fr_1fr] gap-3 sm:min-h-[440px] lg:min-h-[520px]">
            <video
              src="/videos/kitchen-walkthrough.mp4"
              poster="/images/after.png"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Finished kitchen walkthrough"
              className="col-span-2 h-full w-full rounded-xl object-cover"
            />
            <Placeholder src="/images/pro-on-site.png" alt="Contractor on site" className="rounded-xl" />
            <Placeholder src="/images/bath-detail.png" alt="Renovated bathroom vanity" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white px-5 py-14 sm:px-8 sm:py-[74px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-12">
            <div className="flex flex-col gap-[14px]">
              <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
                How it works
              </div>
              <h2 className="balance m-0 max-w-[560px] text-[30px] font-bold leading-[1.1] tracking-[-.032em] text-ink sm:text-[38px] lg:text-[42px]">
                Talk to Nora, meet an expert, and get a quote built for your home
              </h2>
            </div>
            <p className="m-0 max-w-[300px] text-[14.5px] font-normal leading-[1.65] text-ink/[.58]">
              A few minutes with Nora, an expert booked the same day, and a real
              quote in your hands. Nothing to fill in twice.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-[26px] md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-accent font-mono text-[11.5px] font-medium leading-none text-white">
                    {s.n}
                  </div>
                  <div className="h-px flex-1 bg-ink/[.12]" />
                </div>
                <Placeholder src={s.img} alt={s.media} className="h-[158px] rounded-xl" />
                <div className="text-[21px] font-bold leading-[1.25] tracking-[-.022em] text-ink">
                  {s.title}
                </div>
                <p className="pretty m-0 text-[15px] font-normal leading-[1.65] text-ink/[.62]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-5 rounded-[14px] border border-ink/10 bg-surface px-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-[26px] sm:py-[22px]">
            <div className="text-[15px] font-medium leading-[1.5] text-ink/[.72]">
              Book a time that suits you and get a written quote — no pressure to
              commit until you&apos;re ready.
            </div>
            <Link
              href="/nora"
              className="w-full flex-none rounded-[10px] bg-accent px-[22px] py-[14px] text-center text-[14.5px] font-semibold leading-[1.2] text-white hover:text-white sm:w-auto"
            >
              Start with Nora
            </Link>
          </div>
        </div>
      </section>

      <BeforeAfter />

      {/* Categories */}
      <section id="categories" className="px-5 pb-14 pt-14 sm:px-8 sm:pb-[66px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[22px]">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[34px] lg:text-[38px]">
              Start where you are
            </h2>
            <Link href="/#categories" className="text-[13.5px] font-semibold leading-none text-accent-link">
              All 34 categories →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                href="/nora"
                key={c.name}
                className="overflow-hidden rounded-xl border border-line transition-shadow hover:shadow-card"
              >
                <Placeholder src={c.img} alt={c.name} className="h-[132px]" />
                <div className="px-4 py-[14px]">
                  <div className="text-[15.5px] font-semibold leading-[1.3] text-ink">
                    {c.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface px-5 py-14 sm:px-8 sm:py-[60px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[26px]">
          <h2 className="m-0 text-[26px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[30px] lg:text-[34px]">
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
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  />
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
        </div>
      </section>

      {/* Guides */}
      <section id="blog" className="px-5 py-14 sm:px-8 sm:py-[66px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[34px] lg:text-[38px]">
              Read before you renovate
            </h2>
            <Link href="/guides/kitchen-30k" className="text-[13.5px] font-semibold leading-none text-accent-link">
              All guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[1.6fr_1fr_1fr]">
            <Link href="/guides/kitchen-30k" className="flex flex-col gap-[14px]">
              <Placeholder className="h-[200px] rounded-xl sm:h-[230px]" align="none" />
              <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                Budgeting · 7 min
              </div>
              <div className="max-w-[440px] text-[22px] font-bold leading-[1.22] tracking-[-.025em] text-ink sm:text-[25px]">
                What a mid-range kitchen actually buys you in 2026
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
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-ink px-5 py-14 sm:px-8 sm:py-[56px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center sm:gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="m-0 max-w-[520px] text-[27px] font-bold leading-[1.12] tracking-[-.03em] text-white sm:text-[34px]">
              Still just thinking about it? Ask anyway.
            </h2>
            <p className="m-0 max-w-[440px] text-[15px] font-normal leading-[1.6] text-white/[.66]">
              Nora will scope it, price it, and leave you alone until you&apos;re
              ready.
            </p>
          </div>
          <div className="flex w-full flex-col gap-[10px] sm:w-auto sm:flex-none sm:flex-row">
            <Link
              href="/nora"
              className="rounded-[10px] bg-white px-[22px] py-[15px] text-center text-[14.5px] font-semibold leading-none text-ink hover:text-ink"
            >
              Start a chat
            </Link>
            <Link
              href="/nora"
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
