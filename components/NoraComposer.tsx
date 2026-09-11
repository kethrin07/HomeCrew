"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useNoraChat } from "@/lib/nora";

const CHIPS = ["Kitchen refresh", "Roof leak", "Bathroom remodel"];

/**
 * Hero chat composer (design 1a / 1d). The homeowner can type a project,
 * tap a chip, or hit "Ask Nora", any of which pushes them into the Nora flow.
 */
export function NoraComposer() {
  const router = useRouter();
  const { input, setInput } = useNoraChat();

  const go = (seed?: string) => {
    const q = (seed ?? input).trim();
    router.push(q ? `/nora?q=${encodeURIComponent(q)}` : "/nora");
  };

  // TODO(elevenlabs): start the voice agent here instead of routing to chat.
  const talk = () => go();

  return (
    <div className="max-w-[510px] rounded-[18px] border-[1.5px] border-accent/40 bg-white p-[18px] shadow-composer">
      <div className="mb-[15px] flex items-center gap-[10px]">
        <Image
          src="/images/nora.png"
          alt="Nora"
          width={30}
          height={30}
          className="h-[30px] w-[30px] flex-none rounded-full object-cover"
        />
        <div className="text-[15.5px] font-bold leading-[1.25] tracking-[-.015em] text-ink">
          Nora books your expert appointment
        </div>
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") go();
        }}
        placeholder="Redo my 1970s kitchen, where do I start?"
        className="w-full rounded-[11px] border border-ink/15 bg-surface px-[15px] py-[14px] text-[15px] font-normal leading-[1.3] text-ink outline-none placeholder:text-ink/45"
      />

      <div className="mt-[10px] flex gap-[9px]">
        <button
          onClick={() => go()}
          className="flex-[2] rounded-[11px] bg-accent p-4 text-[15.5px] font-bold leading-[1.2] text-white"
        >
          Ask Nora
        </button>
        <button
          onClick={talk}
          className="flex-1 whitespace-nowrap rounded-[11px] border border-ink/20 bg-white p-4 text-[14.5px] font-semibold leading-[1.2] text-ink"
        >
          ● Talk
        </button>
      </div>

      <div className="mt-[12px] flex flex-wrap gap-[7px]">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => go(chip)}
            className="inline-flex items-center rounded-full border border-ink/[.12] px-[11px] py-[6px] text-[12px] font-medium leading-[1.35] text-ink/[.66] transition-colors hover:border-accent hover:text-accent-link"
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="mt-[12px] flex gap-[14px] border-t border-ink/[.07] pt-[12px] text-[11.5px] font-medium leading-none text-ink/50">
        <span>Free · no obligation</span>
        <span>·</span>
        <span>No rigid appointment, an expert calls you</span>
      </div>
    </div>
  );
}
