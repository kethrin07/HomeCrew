"use client";

import { useState } from "react";
import Image from "next/image";

const CHIPS = ["Kitchen refresh", "Roof leak", "Bathroom, under $15k"];

/** Open the floating widget, optionally seeding a first chat message. */
function openChat(detail: { mode?: "home" | "chat"; seed?: string }) {
  window.dispatchEvent(new CustomEvent("nora:open", { detail }));
}

/**
 * Hero chat card. A styled preview of a conversation with Nora; engaging
 * (chip, Enter, "Get my callback" or "Talk") hands off to the floating
 * NoraChat widget. UI only — no live agent is wired up.
 */
export function HeroChat() {
  const [input, setInput] = useState("");

  const submit = (text: string) => {
    const t = text.trim();
    openChat(t ? { mode: "chat", seed: t } : { mode: "chat" });
    setInput("");
  };

  return (
    <div className="w-full max-w-[520px] rounded-[20px] border border-ink/10 bg-white p-4 shadow-composer ring-1 ring-black/[.03] sm:p-5">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-line pb-3">
        <Image
          src="/images/nora.png"
          alt="Nora"
          width={38}
          height={38}
          className="h-[38px] w-[38px] flex-none rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="text-[15.5px] font-bold leading-tight text-ink">Ask Nora</div>
          <div className="mt-[2px] font-mono text-[11px] font-medium uppercase leading-tight tracking-[.06em] text-ink/50">
            Chat or voice · replies in seconds
          </div>
        </div>
        <span className="flex flex-none items-center gap-1 rounded-full bg-olive/10 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[.1em] text-olive">
          <span className="h-1.5 w-1.5 rounded-full bg-olive" />
          Online
        </span>
      </div>

      {/* Sample conversation */}
      <div className="flex flex-col gap-2 pt-3.5">
        <div className="max-w-[85%] self-start rounded-[14px_14px_14px_4px] bg-canvas px-3.5 py-2.5 text-[14.5px] leading-[1.5] text-ink">
          Hi — what are we working on?
        </div>
        <div className="max-w-[85%] self-end rounded-[14px_14px_4px_14px] bg-olive-dark px-3.5 py-2.5 text-[14.5px] leading-[1.5] text-white">
          My kitchen. It&apos;s a 1970s galley and the cabinets are shot.
        </div>
      </div>

      {/* Input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit(input);
        }}
        placeholder="Redo my 1970s kitchen — where do I start?"
        className="mt-3 w-full rounded-[11px] border border-ink/15 bg-surface px-3.5 py-3.5 text-[14.5px] leading-none text-ink outline-none placeholder:text-ink/45 focus:border-accent"
      />

      {/* Actions */}
      <div className="mt-2.5 flex gap-2">
        <button
          onClick={() => submit(input)}
          className="flex-[2] rounded-[11px] bg-accent px-4 py-3.5 text-[14px] font-semibold uppercase tracking-[.04em] leading-none text-white transition-transform hover:scale-[1.01]"
        >
          Get my callback
        </button>
        <button
          onClick={() => openChat({ mode: "home" })}
          className="flex-1 rounded-[11px] border border-ink/20 bg-white px-4 py-3.5 text-[14px] font-semibold uppercase tracking-[.04em] leading-none text-ink transition-colors hover:border-ink/40"
        >
          ● Talk
        </button>
      </div>

      {/* Quick chips */}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => submit(chip)}
            className="rounded-full border border-ink/[.14] px-3 py-2 text-[13px] font-medium leading-tight text-ink/[.7] transition-colors hover:border-accent hover:text-accent-link"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-3 border-t border-ink/[.07] pt-3 font-mono text-[11.5px] font-medium leading-tight text-ink/55">
        Free · no obligation · an expert calls you back
      </div>
    </div>
  );
}
