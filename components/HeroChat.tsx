"use client";

import { useState } from "react";
import Image from "next/image";
import { GREETING, OPTIONS } from "@/lib/nora";

/** Open the floating widget in chat mode, optionally seeding a first message. */
function openChat(seed?: string) {
  window.dispatchEvent(new CustomEvent("nora:open", { detail: { mode: "chat", seed } }));
}

/**
 * Compact chat card for the hero. Shows Nora's default greeting and quick
 * replies; engaging (option, Enter or send) hands off to the floating NoraChat
 * widget with the message seeded.
 */
export function HeroChat() {
  const [input, setInput] = useState("");

  const submit = (text: string) => {
    const t = text.trim();
    if (!t) return;
    openChat(t);
    setInput("");
  };

  return (
    <div className="w-full max-w-[450px] rounded-2xl border border-ink/10 bg-surface p-4 shadow-composer">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2.5">
        <div className="relative flex-none">
          <Image
            src="/images/nora.png"
            alt="Nora"
            width={34}
            height={34}
            className="h-[34px] w-[34px] rounded-full object-cover"
          />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-accent" />
        </div>
        <div>
          <div className="text-[13.5px] font-semibold leading-tight text-ink">Nora</div>
          <div className="mt-[1px] font-mono text-[9.5px] font-medium uppercase leading-tight tracking-[.1em] text-accent-link">
            AI assistant · online
          </div>
        </div>
      </div>

      {/* Default greeting */}
      <div className="rounded-[14px_14px_14px_4px] bg-canvas px-3.5 py-2.5 text-[13.5px] leading-[1.5] text-ink">
        {GREETING}
      </div>

      {/* Quick replies */}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {OPTIONS.map((o) => (
          <button
            key={o}
            onClick={() => submit(o)}
            className="rounded-full border border-accent/40 bg-white px-3 py-1.5 text-[12px] font-medium leading-tight text-accent-deep transition-colors hover:border-accent hover:bg-accent-tint"
          >
            {o}
          </button>
        ))}
      </div>

      {/* Composer */}
      <div className="mt-3 flex items-center gap-2 rounded-[11px] border border-ink/15 bg-canvas px-3 py-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit(input);
          }}
          placeholder="Type your project…"
          className="min-w-0 flex-1 bg-transparent text-[13.5px] leading-none text-ink outline-none placeholder:text-ink/45"
        />
        <button
          onClick={() => submit(input)}
          disabled={!input.trim()}
          aria-label="Send message"
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent text-white transition-opacity disabled:opacity-40"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3.4 20.4l17.45-8.48a1 1 0 000-1.84L3.4 1.6a.7.7 0 00-.98.83L4.6 10.3c.07.28.07.57 0 .85l-2.18 7.42a.7.7 0 00.98.83z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
