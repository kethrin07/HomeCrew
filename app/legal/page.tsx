import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "MyHomeQuote's terms of service and privacy policy. Full content coming soon.",
  // Placeholder for now, so keep it out of search until the real content lands.
  robots: { index: false, follow: true },
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="px-5 py-14 sm:px-8 sm:py-[72px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[760px] flex-col gap-10">
          <div className="flex flex-col gap-[14px]">
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
              Legal
            </div>
            <h1 className="balance m-0 text-[30px] font-bold leading-[1.1] tracking-[-.032em] text-ink sm:text-[40px]">
              Terms &amp; privacy
            </h1>
            <p className="pretty m-0 max-w-[520px] text-[15.5px] font-normal leading-[1.6] text-ink/[.62]">
              We&apos;re putting the finishing touches on our legal pages. The full
              terms of service and privacy policy will live here soon.
            </p>
          </div>

          <div id="privacy" className="flex scroll-mt-24 flex-col gap-3">
            <h2 className="m-0 text-[20px] font-bold leading-[1.2] tracking-[-.02em] text-ink">
              Privacy policy
            </h2>
            <p className="m-0 text-[15px] font-normal leading-[1.65] text-ink/[.62]">
              Coming soon. This section will explain what information we collect,
              how we use it, and the choices you have.
            </p>
          </div>

          <div id="terms" className="flex scroll-mt-24 flex-col gap-3">
            <h2 className="m-0 text-[20px] font-bold leading-[1.2] tracking-[-.02em] text-ink">
              Terms of service
            </h2>
            <p className="m-0 text-[15px] font-normal leading-[1.65] text-ink/[.62]">
              Coming soon. This section will cover the terms that apply when you
              use MyHomeQuote.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
