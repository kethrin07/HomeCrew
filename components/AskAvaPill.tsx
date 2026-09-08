import Image from "next/image";
import Link from "next/link";

/**
 * Floating "Ask Ava" pill fixed to the bottom-right of the viewport
 * (design 1d / 1f). Stays visible as the page scrolls.
 */
export function AskAvaPill() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <Link
        href="/ava"
        className="pointer-events-auto flex items-center gap-[11px] rounded-full bg-ink py-[10px] pl-3 pr-[18px] shadow-pill ring-1 ring-white/10"
      >
        <Image
          src="/images/nora.png"
          alt="Nora"
          width={32}
          height={32}
          className="h-8 w-8 flex-none rounded-full object-cover"
        />
        <div>
          <div className="text-[13.5px] font-semibold leading-[1.2] text-white">
            Ask Nora
          </div>
          <div className="mt-[3px] font-mono text-[9.5px] font-medium leading-[1.3] tracking-[.1em] text-white/[.58]">
            CHAT OR VOICE
          </div>
        </div>
      </Link>
    </div>
  );
}
