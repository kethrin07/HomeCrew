"use client";

import { useState } from "react";
import { avaReply, type Message } from "@/lib/ava";

const CHIPS = ["Kitchen refresh", "Roof leak", "Bathroom, under $15k"];

const INITIAL: Message[] = [
  { text: "Hi — what are we working on?", role: "a" },
  { text: "My kitchen. 1970s galley, cabinets are shot.", role: "u" },
];

/** Open the floating widget, optionally seeding a first chat message. */
function openChat(seed?: string) {
  window.dispatchEvent(new CustomEvent("nora:open", { detail: { mode: "chat", seed } }));
}

/**
 * Hero chat card — the primary CTA. Scripted conversation with Nora; sending or
 * tapping a chip appends the exchange and also opens the floating widget.
 */
export function HeroChat() {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Message[]>(INITIAL);

  const push = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((prev) => [...prev, { text: t, role: "u" }, { text: avaReply(t), role: "a" }]);
    setInput("");
    openChat(t);
  };

  return (
    <div className="w-full rounded-[14px] bg-surface p-6 shadow-[0_34px_70px_-28px_rgba(0,0,0,.5)]">
      {/* Header */}
      <div className="mb-[18px] flex items-center gap-3">
        <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-olive-dark font-display text-[14px] font-semibold uppercase leading-none text-surface">
          AV
        </div>
        <div className="flex-1">
          <div className="font-display text-[17px] font-semibold uppercase leading-[1.15] tracking-[.05em] text-ink">
            Ask Nora
          </div>
          <div className="mt-[3px] text-[12px] leading-[1.3] text-ink/60">
            Chat or voice · replies in ~8 seconds
          </div>
        </div>
        <span className="flex flex-none items-center gap-1.5 rounded-full bg-olive-dark/[.12] px-[11px] py-[7px] text-[9.5px] font-semibold uppercase leading-[1.4] tracking-[.16em] text-olive-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-olive-dark" />
          Online
        </span>
      </div>

      {/* Transcript */}
      <div className="mb-4 flex max-h-[220px] flex-col gap-2.5 overflow-y-auto">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "u"
                ? "max-w-[86%] self-end rounded-[12px_12px_3px_12px] bg-olive-dark px-[15px] py-3 text-[14.5px] leading-[1.55] text-surface"
                : "max-w-[86%] self-start rounded-[12px_12px_12px_3px] bg-canvas px-[15px] py-3 text-[14.5px] leading-[1.55] text-ink"
            }
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") push(input);
        }}
        placeholder="Redo my 1970s kitchen — where do I start?"
        className="w-full rounded-[9px] border border-ink/[.18] bg-[#fffdf8] px-4 py-[15px] text-[15px] leading-[1.3] text-ink outline-none placeholder:text-ink/45 focus:border-accent"
      />

      {/* Actions */}
      <div className="mt-2.5 flex gap-[9px]">
        <button
          onClick={() => push(input || "Kitchen refresh — where do I start?")}
          className="flex-[2] rounded-[9px] bg-accent p-[17px] font-display text-[14px] font-semibold uppercase leading-[1.2] tracking-[.12em] text-surface transition-colors hover:bg-accent-dark"
        >
          Get my callback
        </button>
        <button
          onClick={() => openChat()}
          className="flex-1 whitespace-nowrap rounded-[9px] border-[1.5px] border-olive-dark p-[17px] font-display text-[13px] font-semibold uppercase leading-[1.2] tracking-[.1em] text-olive-dark transition-colors hover:bg-olive-dark hover:text-surface"
        >
          ● Talk
        </button>
      </div>

      {/* Chips */}
      <div className="mt-3 flex flex-wrap gap-[7px]">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => push(chip)}
            className="inline-flex items-center rounded-full border border-ink/[.16] px-3 py-[7px] text-[12px] font-medium leading-[1.35] text-ink/[.68] transition-colors hover:border-accent hover:text-accent"
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="mt-[13px] text-center text-[11.5px] leading-[1.5] text-ink/50">
        Free · no obligation · no fixed appointment to keep
      </div>
    </div>
  );
}
