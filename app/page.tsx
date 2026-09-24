import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Placeholder } from "@/components/Placeholder";
import { NoraComposer } from "@/components/NoraComposer";
import { BeforeAfter } from "@/components/BeforeAfter";
import { AskNora } from "@/components/AskNora";
import { Testimonials } from "@/components/Testimonials";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";

const STEPS = [
  {
    n: "01",
    alt: "Homeowner describing a renovation project to Nora by text and voice",
    img: "/images/chat-voice.png",
    title: "Say hello to Nora",
    body: "Type it or say it out loud. Nora gently asks about scope, timing and budget. No 14-field form to slog through.",
  },
  {
    n: "02",
    alt: "Licensed contractor meeting a homeowner on a video call to discuss their project",
    img: "/images/expert-video-call.png",
    title: "Meet your expert",
    body: "Nora lines up a licensed pro and finds a time that suits you, on site or on a call. No waiting around, no phone tag.",
  },
  {
    n: "03",
    alt: "A clear, itemized home renovation quote broken down line by line",
    img: "/images/itemised-quote.png",
    title: "Get a quote made for you",
    body: "Your expert walks the job through with you and hands over a clear, itemized quote built around your home, your ZIP code and your budget.",
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
  { name: "Kitchens", img: "/images/kitchen.png", alt: "A remodeled modern kitchen with new cabinets and countertops" },
  { name: "Bathrooms", img: "/images/bathroom.png", alt: "A renovated bathroom with a tiled shower and new vanity" },
  { name: "Roof & gutters", img: "/images/roof-and-gutter.png", alt: "A house with a newly replaced roof and gutters" },
  { name: "Decks & yards", img: "/images/decks-and-yards.png", alt: "A finished backyard deck and landscaped yard" },
];

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote:
      "Messaged them late one night not expecting much. Nora had a pro lined up to call me by the next afternoon. Smoother than I thought it would be.",
    name: "Priya N.",
    meta: "Bathroom · Austin",
    img: "/images/priya.png",
  },
  {
    stars: "★★★★★",
    quote:
      "First house and I had no clue where to start. Nora asked the right questions and set up a call with someone who actually knew their stuff. No pressure to commit.",
    name: "Marcus T.",
    meta: "Kitchen · Columbus",
    img: "/images/marcus.png",
  },
  {
    stars: "★★★★☆",
    quote:
      "The chat was easy and the pro called when they said they would. The quote took a couple days longer than I'd hoped, but the work held up.",
    name: "Dana R.",
    meta: "Roofing · Portland",
    img: "/images/dana.png",
  },
];

const FAQ = [
  {
    q: "Is MyHomeQuote free to use?",
    a: "Yes. Describing your project to Nora and getting matched with a licensed pro is completely free, with no obligation. You only pay a contractor if you choose to hire one.",
  },
  {
    q: "How does it work?",
    a: "Tell Nora what you have in mind. She scopes the project with you and sets up an appointment with a licensed local pro, who then calls you back with a personalized quote.",
  },
  {
    q: "Who are the pros?",
    a: "They are independent, licensed local contractors. MyHomeQuote is a matching service, so you always choose whether to work with anyone you are introduced to.",
  },
  {
    q: "Do I have to commit to anything?",
    a: "No. There is no obligation and no pressure. Nora will help scope your project, then leave you be until you are ready.",
  },
  {
    q: "What kinds of projects can Nora help with?",
    a: "Everything from kitchens, bathrooms and roofing to plumbing, windows, fencing and more. You can browse the full list on the categories page.",
  },
  {
    q: "Is Nora a real person?",
    a: "Nora is an AI assistant that helps you describe your project and book an appointment. A licensed pro, a real person, handles the actual quote.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* Preload the hero video poster (the LCP element) so it's discoverable
          in the initial HTML and fetched at high priority, rather than only
          after the browser parses the <video> tag. */}
      <link
        rel="preload"
        as="image"
        href="/images/after-poster.webp"
        fetchPriority="high"
      />
      <Header />

      {/* Hero */}
      <section className="bg-surface px-5 py-14 sm:px-8 sm:py-[72px] lg:px-12">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[52px]">
          <div className="flex flex-col gap-6">
            <Reveal delay={0}>
              <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-accent-link">
                Matched in one conversation
              </div>
            </Reveal>
            <Reveal delay={240}>
              <h1 className="balance m-0 text-[34px] font-extrabold leading-[1.05] tracking-tighter2 text-ink sm:text-[44px] lg:text-[58px]">
                Let&apos;s bring your home
                <br />
                project to life.
              </h1>
            </Reveal>
            <Reveal delay={480}>
              <p className="pretty m-0 max-w-[420px] text-[15.5px] font-normal leading-[1.6] text-ink/[.62] sm:text-[16.5px]">
                Just tell Nora what you have in mind, and she&apos;ll set you up with a
                trusted local pro for a personalized quote. No forms, no call center,
                no chasing, promise.
              </p>
            </Reveal>

            <Reveal delay={720}>
              <NoraComposer />
            </Reveal>

            <Reveal delay={960}>
              <div className="flex items-center gap-4">
                <div className="flex">
                  <div className="h-7 w-7 rounded-full border-2 border-surface" style={{ background: "oklch(0.88 0.03 165)" }} />
                  <div className="-ml-[9px] h-7 w-7 rounded-full border-2 border-surface" style={{ background: "oklch(0.84 0.04 200)" }} />
                  <div className="-ml-[9px] h-7 w-7 rounded-full border-2 border-surface" style={{ background: "oklch(0.86 0.04 60)" }} />
                </div>
                <div className="text-[13px] font-normal leading-[1.4] text-ink/[.65]">
                  <strong className="font-semibold text-ink">4.8</strong> from 12,400
                  happy homeowners
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid h-full min-h-[320px] grid-cols-2 grid-rows-[1.5fr_1fr] gap-3 sm:min-h-[440px] lg:min-h-[520px]">
            <Reveal delay={300} className="col-span-2 h-full">
              <video
                src="/videos/kitchen-walkthrough.mp4"
                poster="/images/after-poster.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Video walkthrough of a finished, remodeled kitchen"
                className="h-full w-full rounded-xl object-cover"
              />
            </Reveal>
            <Reveal delay={460} className="h-full">
              <Placeholder src="/images/pro-on-site.png" alt="Licensed contractor working on a home renovation on site" className="h-full rounded-xl" />
            </Reveal>
            <Reveal delay={620} className="h-full">
              <Placeholder src="/images/bath-detail.png" alt="Close-up of a newly renovated bathroom vanity and fixtures" className="h-full rounded-xl" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white px-5 py-14 sm:px-8 sm:py-[74px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-12">
            <Reveal className="flex flex-col gap-[14px]">
              <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
                How it works
              </div>
              <h2 className="balance m-0 max-w-[560px] text-[30px] font-bold leading-[1.1] tracking-[-.032em] text-ink sm:text-[38px] lg:text-[42px]">
                Say hello to Nora, meet your expert, and get a quote made just for your home
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="m-0 max-w-[300px] text-[14.5px] font-normal leading-[1.65] text-ink/[.65]">
                A few friendly minutes with Nora, an expert booked the same day, and a
                real quote in your hands. Nothing to fill in twice, ever.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-[26px] md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} direction="left" delay={i * 480} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-accent font-mono text-[11.5px] font-medium leading-none text-white">
                    {s.n}
                  </div>
                  <div className="h-px flex-1 bg-ink/[.12]" />
                </div>
                {s.n === "01" ? (
                  <AskNora
                    ariaLabel="Start chatting with Nora"
                    className="peer group relative block h-[189px] w-full overflow-hidden rounded-xl ring-1 ring-transparent transition-all duration-200 hover:shadow-composer hover:ring-2 hover:ring-accent/50"
                  >
                    <Image
                      src={s.img}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent px-4 pb-3 pt-10 text-[13.5px] font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Start chatting
                      <span aria-hidden="true">→</span>
                    </span>
                  </AskNora>
                ) : (
                  <Placeholder src={s.img} alt={s.alt} className="h-[189px] rounded-xl" />
                )}
                <div className="text-[21px] font-bold leading-[1.25] tracking-[-.022em] text-ink transition-colors peer-hover:text-accent-link">
                  {s.title}
                </div>
                <p className="pretty m-0 text-[15px] font-normal leading-[1.65] text-ink/[.62]">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex flex-col items-start justify-between gap-5 rounded-[14px] border border-ink/10 bg-surface px-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-[26px] sm:py-[22px]">
            <div className="text-[15px] font-medium leading-[1.5] text-ink/[.72]">
              Pick a time that suits you and get a written quote, with zero pressure
              to commit until you&apos;re good and ready.
            </div>
            <AskNora
              className="w-full flex-none rounded-[10px] bg-accent px-[22px] py-[14px] text-center text-[14.5px] font-semibold leading-[1.2] text-white hover:text-white sm:w-auto"
            >
              Start with Nora
            </AskNora>
          </Reveal>
        </div>
      </section>

      <BeforeAfter />

      {/* Categories */}
      <section id="categories" className="px-5 pb-14 pt-14 sm:px-8 sm:pb-[66px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[22px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[34px] lg:text-[38px]">
              Start where you are
            </h2>
            <Link href="/categories" className="text-[13.5px] font-semibold leading-none text-accent-link">
              All categories →
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                <AskNora
                  seed={c.name}
                  ariaLabel={`Ask Nora about ${c.name}`}
                  className="block w-full overflow-hidden rounded-xl border border-line text-left transition-shadow hover:shadow-card"
                >
                  <Placeholder src={c.img} alt={c.alt} className="h-[132px]" />
                  <div className="px-4 py-[14px]">
                    <div className="text-[15.5px] font-semibold leading-[1.3] text-ink">
                      {c.name}
                    </div>
                  </div>
                </AskNora>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden bg-surface px-5 py-14 sm:px-8 sm:py-[60px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-9">
          <Reveal>
            <h2 className="m-0 text-center text-[26px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[30px] lg:text-[34px]">
              What homeowners are saying
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Testimonials items={TESTIMONIALS} />
          </Reveal>
        </div>
      </section>

      {/* Guides */}
      <section id="blog" className="px-5 py-14 sm:px-8 sm:py-[66px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[34px] lg:text-[38px]">
              A little reading before you begin
            </h2>
            <Link href="/guides" className="text-[13.5px] font-semibold leading-none text-accent-link">
              All guides →
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[1.6fr_1fr_1fr]">
            <Reveal>
              <Link href="/guides/kitchen-30k" className="flex flex-col gap-[14px]">
                <Placeholder className="h-[200px] rounded-xl sm:h-[230px]" align="none" />
                <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                  Budgeting · 7 min
                </div>
                <div className="max-w-[440px] text-[22px] font-bold leading-[1.22] tracking-[-.025em] text-ink sm:text-[25px]">
                  What a mid-range kitchen actually buys you in 2026
                </div>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col gap-3">
                <Placeholder className="h-[130px] rounded-xl" align="none" />
                <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                  Hiring · 5 min
                </div>
                <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
                  Nine questions to ask before you sign a contract
                </div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col gap-3">
                <Placeholder className="h-[130px] rounded-xl" align="none" />
                <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                  Permits · 4 min
                </div>
                <div className="text-[18px] font-bold leading-[1.3] tracking-[-.02em] text-ink">
                  Which jobs need a permit, by state
                </div>
              </div>
            </Reveal>
          </div>

          {/* More example blog topics */}
          <Reveal className="mt-4 flex flex-col gap-[18px] border-t border-line pt-8">
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
                  <span className="font-mono text-[10px] font-medium uppercase leading-none tracking-[.1em] text-ink/65">
                    {t.tag}
                  </span>
                  <span className="text-[15.5px] font-semibold leading-[1.35] tracking-[-.015em] text-ink transition-colors group-hover:text-accent-link">
                    {t.title}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-surface px-5 py-14 sm:px-8 sm:py-[66px] lg:px-12">
        <JsonLd data={FAQ_SCHEMA} />
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-8">
          <Reveal className="flex flex-col gap-[10px]">
            <h2 className="m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] text-ink sm:text-[34px]">
              Frequently asked
            </h2>
            <p className="m-0 max-w-[440px] text-[14.5px] font-normal leading-[1.6] text-ink/[.65]">
              Everything you need to know before you start a project with Nora.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3">
            {FAQ.map((item) => (
              <Reveal key={item.q}>
                <details name="faq" className="group rounded-xl border border-line bg-white px-5 py-[18px] transition-colors">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold leading-[1.4] text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="flex-none text-[20px] font-normal leading-none text-ink/65">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="m-0 pr-6 pt-3 text-[14px] font-normal leading-[1.65] text-ink/[.65]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-5 pb-12 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12 lg:pt-20">
        <div className="mx-auto w-full max-w-[1200px]">
          <Reveal className="relative rounded-[24px] bg-canvas shadow-[0_18px_55px_-12px_rgba(20,23,26,0.45)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Copy */}
              <div className="flex flex-col gap-4 px-7 py-8 sm:px-12 sm:py-10 lg:py-12">
                <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
                  Ready when you are
                </div>
                <h2 className="balance m-0 max-w-[420px] text-[27px] font-bold leading-[1.12] tracking-[-.03em] text-ink sm:text-[34px]">
                  Still just dreaming about it? Come say hi.
                </h2>
                <p className="pretty m-0 max-w-[400px] text-[15px] font-normal leading-[1.6] text-ink/[.62]">
                  Nora will happily help you scope your project, then leave you be
                  until you&apos;re ready. No pressure, ever.
                </p>
                <div className="mt-1 flex flex-col gap-[10px] sm:flex-row">
                  <AskNora
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-[24px] py-[14px] text-[14.5px] font-semibold leading-none text-white transition-transform hover:scale-[1.02] hover:text-white"
                  >
                    Start a chat
                    <span aria-hidden="true">→</span>
                  </AskNora>
                  <AskNora
                    mode="home"
                    className="inline-flex items-center justify-center rounded-full border border-ink/15 px-[24px] py-[14px] text-[14.5px] font-semibold leading-none text-ink transition-colors hover:border-ink/40 hover:text-ink"
                  >
                    Talk to Nora
                  </AskNora>
                </div>
              </div>

              {/* Mobile image: contained inside the card */}
              <div className="flex justify-center px-7 pb-8 lg:hidden">
                <Image
                  src="/images/bottom-cta.png"
                  alt="Planning a home project with Nora"
                  width={420}
                  height={360}
                  className="h-auto w-full max-w-[260px] object-contain"
                />
              </div>
            </div>

            {/* Desktop image: full (uncropped) and rising above the card's top edge */}
            <div className="pointer-events-none absolute bottom-0 right-2 hidden h-[calc(100%+40px)] w-[40%] lg:block xl:right-6">
              <Image
                src="/images/bottom-cta.png"
                alt="Planning a home project with Nora"
                fill
                sizes="600px"
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
