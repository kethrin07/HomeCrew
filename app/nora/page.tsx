import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { NoraFlow } from "@/components/nora/NoraFlow";

export const metadata: Metadata = {
  title: "Nora · MyHomeQuote",
  description:
    "Nora collects the details and hands you to a real expert who calls you back with a personalized quote.",
};

export default async function NoraPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <main className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-[1180px] bg-white sm:mt-8 sm:rounded-t-[10px] sm:border sm:border-b-0 sm:border-line">
        <Header />
      </div>
      <div className="mx-auto max-w-[1180px] bg-surface sm:rounded-b-[10px] sm:border sm:border-t-0 sm:border-line sm:shadow-card">
        <NoraFlow seed={q} />
      </div>
    </main>
  );
}
