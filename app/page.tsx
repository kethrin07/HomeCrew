import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroChat } from "@/components/HeroChat";
import { BeforeAfter } from "@/components/BeforeAfter";

const STEPS = [
  {
    n: "01",
    img: "/images/chat-voice.png",
    label: "Photo — homeowner on phone",
    title: "Tell Nora",
    body: "Type it or speak it, photos welcome. She asks about scope, timing and budget. No fourteen-field form.",
  },
  {
    n: "02",
    img: "/images/itemised-quote.png",
    label: "Screen — price range panel",
    title: "See the range",
    body: "A real price band for your ZIP code and square footage, before anyone calls. You decide if it is worth continuing.",
  },
  {
    n: "03",
    img: "/images/expert-video-call.png",
    label: "Photo — expert at the door",
    title: "Get the call",
    body: "Nora hands your notes to a HomeCrew expert who rings within two hours. No slot to keep, nothing repeated.",
  },
];

const TRUST = [
  { icon: "✓", label: "Licence checked" },
  { icon: "◈", label: "Insured on file" },
  { icon: "☗", label: "2-year warranty" },
];

const CATEGORIES = [
  { name: "Kitchens", range: "$18k – $65k", img: "/images/kitchens.png" },
  { name: "Bathrooms", range: "$9k – $30k", img: "/images/bathrooms.png" },
  { name: "Roof & gutters", range: "$7k – $24k", img: "/images/roof-and-gutters.png" },
  { name: "Decks & yards", range: "$5k – $28k", img: "/images/decks-and-yards.png" },
];

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-surface">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/kitchens.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg,rgba(28,32,24,.88) 0%,rgba(28,32,24,.62) 46%,rgba(28,32,24,.22) 100%)",
          }}
        />
        <span className="absolute right-5 top-5 hidden rounded bg-black/30 px-[10px] py-1.5 text-[9.5px] font-medium uppercase leading-[1.4] tracking-[.16em] text-surface/75 sm:block">
          Video — living room remodel, muted loop
        </span>

        <div className="relative mx-auto grid min-h-[540px] w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-16 sm:min-h-[620px] sm:px-8 sm:py-24 lg:min-h-[720px] lg:grid-cols-[1.12fr_.88fr] lg:gap-[48px] lg:px-11 lg:py-[100px]">
          {/* Copy */}
          <div className="flex flex-col gap-[22px]">
            <div className="text-[10px] font-medium uppercase leading-none tracking-[.28em] text-accent-soft">
              Welcome to HomeCrew
            </div>
            <h1 className="m-0 whitespace-nowrap font-display uppercase text-[42px] font-semibold leading-[.96] tracking-[.005em] text-surface sm:text-[58px] lg:text-[72px]">
              Modern homes,
              <br />
              vetted crews
            </h1>
            <p className="pretty m-0 max-w-[430px] text-[16px] leading-[1.7] text-surface/80">
              Tell Nora what you want done. She scopes the job, prices it for
              your ZIP code, and has a HomeCrew expert call you back the same
              afternoon.
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-[26px] gap-y-3">
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] tracking-[.1em] text-accent-soft">★★★★★</span>
                <span className="text-[13px] text-surface/[.72]">4.8 · 12,400 homeowners</span>
              </div>
              <span className="hidden h-4 w-px bg-surface/25 sm:block" />
              <span className="text-[13px] text-surface/[.72]">Licensed &amp; insured only</span>
            </div>
          </div>

          {/* Chat card */}
          <div className="w-full lg:justify-self-end lg:max-w-[460px]">
            <HeroChat />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="flex flex-col items-center gap-[46px] bg-olive px-5 py-16 sm:px-8 sm:py-[78px] lg:px-11"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-[10px] font-medium uppercase leading-none tracking-[.28em] text-accent-soft">
            How it works
          </div>
          <h2 className="m-0 max-w-[720px] font-display uppercase text-[30px] font-semibold leading-[1.04] tracking-[.01em] text-surface sm:text-[40px] lg:text-[50px]">
            One chat with Nora.
            <br className="hidden sm:block" />
            An expert calls you back.
          </h2>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-[26px] sm:grid-cols-2 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-[18px]">
              <div
                className="flex h-[220px] items-end rounded-[14px] bg-cover bg-center p-[13px] sm:h-[250px]"
                style={{ backgroundImage: `url('${s.img}')` }}
              >
                <span className="rounded bg-[rgba(28,32,24,.4)] px-2 py-[5px] text-[9px] font-medium uppercase leading-[1.4] tracking-[.14em] text-surface/[.82]">
                  {s.label}
                </span>
              </div>
              <div className="flex items-baseline gap-[11px]">
                <span className="font-display text-[13px] font-semibold leading-none tracking-[.1em] text-accent-soft">
                  {s.n}
                </span>
                <span className="font-display text-[22px] font-semibold uppercase leading-[1.15] tracking-[.04em] text-surface">
                  {s.title}
                </span>
              </div>
              <p className="m-0 text-[14.5px] leading-[1.7] text-surface/[.76]">{s.body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/ava"
          className="rounded-[7px] bg-accent px-[34px] py-4 font-display text-[13.5px] font-semibold uppercase leading-none tracking-[.14em] text-surface transition-colors hover:bg-accent-dark hover:text-surface"
        >
          Start with Nora
        </Link>

        <div className="mt-1.5 grid w-full max-w-[860px] grid-cols-1 gap-[22px] sm:grid-cols-3">
          {TRUST.map((t) => (
            <div
              key={t.label}
              className="flex flex-col items-center gap-2.5 rounded-xl bg-sand px-5 py-[26px] text-center"
            >
              <div className="font-display text-[20px] font-semibold leading-none text-accent">{t.icon}</div>
              <div className="font-display text-[14px] font-semibold uppercase leading-none tracking-[.12em] text-accent-dark">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BeforeAfter />

      {/* Categories */}
      <section id="categories" className="px-5 pb-[82px] sm:px-8 lg:px-11">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[30px]">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="m-0 font-display uppercase text-[30px] font-semibold leading-[1.05] tracking-[.01em] text-olive-dark sm:text-[38px] lg:text-[46px]">
              Start where you are
            </h2>
            <Link
              href="/#categories"
              className="font-display text-[12.5px] font-semibold uppercase leading-none tracking-[.14em] text-accent"
            >
              All 34 categories →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                href="/ava"
                key={c.name}
                className="overflow-hidden rounded-[14px] bg-canvas transition-shadow hover:shadow-card"
              >
                <div
                  className="h-[160px] bg-cover bg-center sm:h-[210px]"
                  style={{ backgroundImage: `url('${c.img}')` }}
                />
                <div className="px-[18px] pb-[22px] pt-[18px]">
                  <div className="font-display text-[19px] font-semibold uppercase leading-[1.1] tracking-[.05em] text-ink">
                    {c.name}
                  </div>
                  <div className="mt-[9px] text-[12px] font-medium leading-none tracking-[.06em] text-accent">
                    {c.range}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="blog" className="bg-canvas px-5 py-16 sm:px-8 sm:py-[78px] lg:px-11">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
            <div className="flex flex-col gap-[13px]">
              <div className="text-[10px] font-medium uppercase leading-none tracking-[.28em] text-accent">
                Guides
              </div>
              <h2 className="m-0 font-display uppercase text-[30px] font-semibold leading-[1.05] tracking-[.01em] text-olive-dark sm:text-[38px] lg:text-[46px]">
                Read before you renovate
              </h2>
            </div>
            <Link
              href="/guides/kitchen-30k"
              className="font-display text-[12.5px] font-semibold uppercase leading-none tracking-[.14em] text-accent"
            >
              All guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-[1.5fr_1fr_1fr]">
            <Link href="/guides/kitchen-30k" className="flex flex-col gap-4">
              <div
                className="h-[220px] rounded-[14px] bg-cover bg-center sm:h-[290px]"
                style={{ backgroundImage: "url('/images/after.png')" }}
              />
              <div className="text-[9.5px] font-medium uppercase leading-none tracking-[.2em] text-ink/50">
                Budgeting · 7 min
              </div>
              <div className="max-w-[430px] font-display text-[26px] font-semibold uppercase leading-[1.12] tracking-[.02em] text-ink sm:text-[30px]">
                What a $30,000 kitchen actually buys you in 2026
              </div>
              <p className="m-0 max-w-[400px] text-[14.5px] leading-[1.7] text-ink/[.62]">
                We pulled the line items from 214 finished kitchens under
                $35,000 and broke down where the money went.
              </p>
            </Link>

            <Link href="/guides/kitchen-30k" className="flex flex-col gap-[13px]">
              <div
                className="h-[170px] rounded-[14px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bathrooms.png')" }}
              />
              <div className="text-[9.5px] font-medium uppercase leading-none tracking-[.2em] text-ink/50">
                Hiring · 5 min
              </div>
              <div className="font-display text-[21px] font-semibold uppercase leading-[1.18] tracking-[.03em] text-ink">
                Nine questions to ask before you sign a contract
              </div>
            </Link>

            <Link href="/guides/kitchen-30k" className="flex flex-col gap-[13px]">
              <div
                className="h-[170px] rounded-[14px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/roof-and-gutters.png')" }}
              />
              <div className="text-[9.5px] font-medium uppercase leading-none tracking-[.2em] text-ink/50">
                Permits · 4 min
              </div>
              <div className="font-display text-[21px] font-semibold uppercase leading-[1.18] tracking-[.03em] text-ink">
                Which jobs need a permit, by state
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-olive-dark px-5 py-14 sm:px-8 sm:py-16 lg:px-11">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div className="flex flex-col gap-[14px]">
            <h2 className="m-0 max-w-[560px] font-display uppercase text-[30px] font-semibold leading-[1.06] tracking-[.01em] text-surface sm:text-[38px] lg:text-[42px]">
              Still just thinking about it? Ask anyway.
            </h2>
            <p className="m-0 max-w-[440px] text-[15px] leading-[1.7] text-surface/[.74]">
              Nora will scope it, price it, and leave you alone until you are
              ready.
            </p>
          </div>
          <div className="flex w-full flex-col gap-[11px] sm:w-auto sm:flex-none sm:flex-row">
            <Link
              href="/ava"
              className="rounded-[7px] bg-accent px-7 py-[17px] text-center font-display text-[13.5px] font-semibold uppercase leading-none tracking-[.14em] text-surface transition-colors hover:bg-accent-dark hover:text-surface"
            >
              Chat with Nora
            </Link>
            <Link
              href="/ava"
              className="rounded-[7px] border-[1.5px] border-surface/40 px-7 py-[17px] text-center font-display text-[13.5px] font-semibold uppercase leading-none tracking-[.14em] text-surface transition-colors hover:border-surface hover:text-surface"
            >
              Request a call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
