"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { avaReply } from "@/lib/ava";
import { GREETING, OPTIONS } from "@/lib/nora";

type Msg = { role: "nora" | "user"; text: string };
type Mode = "home" | "chat";

/**
 * Fixed-size panel wrapper. Defined at module scope (not inside the component)
 * so its identity is stable across renders — otherwise the chat input would
 * remount and lose focus on every keystroke.
 */
function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="dialog"
      aria-label="Talk to Nora"
      className="flex w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-pill sm:w-[380px]"
      style={{ height: "min(560px, calc(100vh - 3rem))" }}
    >
      {children}
    </div>
  );
}

/**
 * Floating chat popup, open by default. Leads with a call-first "home" screen —
 * Nora's photo plus a prominent Call button — and offers a text-chat
 * alternative underneath.
 *
 * UI only: chat replies come from the scripted responder in lib/ava and the
 * Call button just shows a hint — no live voice/AI agent is wired up yet.
 * Search `TODO(elevenlabs)` / `TODO(agent)` to connect them.
 */
export function NoraChat() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("home");
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "nora", text: GREETING }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [voiceHint, setVoiceHint] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sendRef = useRef<(t: string) => void>(() => {});

  // Show the quick-reply options only until the homeowner first responds.
  const showOptions = msgs.length === 1;

  // Keep the transcript pinned to the newest message.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing, mode, open]);

  // Let other parts of the page open the widget, optionally jumping straight
  // into chat mode and seeding a first message.
  useEffect(() => {
    const openHandler = (e: Event) => {
      const detail = (e as CustomEvent).detail as
        | { mode?: Mode; seed?: string }
        | undefined;
      setOpen(true);
      setMode(detail?.mode ?? (detail?.seed ? "chat" : "home"));
      if (detail?.seed) {
        const seed = detail.seed;
        window.setTimeout(() => sendRef.current(seed), 0);
      }
    };
    window.addEventListener("nora:open", openHandler);
    return () => window.removeEventListener("nora:open", openHandler);
  }, []);

  const send = (text: string) => {
    const t = text.trim();
    if (!t || typing) return;
    setMsgs((prev) => [...prev, { role: "user", text: t }]);
    setInput("");
    setTyping(true);
    // TODO(agent): swap avaReply for the live assistant response.
    const reply = avaReply(t);
    window.setTimeout(() => {
      setMsgs((prev) => [...prev, { role: "nora", text: reply }]);
      setTyping(false);
    }, 650);
  };
  sendRef.current = send;

  // TODO(elevenlabs): start the ElevenLabs voice agent instead of showing a hint.
  const startCall = () => setVoiceHint(true);

  const minimiseBtn = (onDark: boolean) => (
    <button
      onClick={() => setOpen(false)}
      aria-label="Minimise"
      className={
        onDark
          ? "flex h-7 w-7 flex-none items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          : "flex h-7 w-7 flex-none items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
      }
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 8h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  );

  const phoneIcon = (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.15.39 2.37.59 3.6.59a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.46.59 3.6a1 1 0 01-.25 1z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          aria-label="Talk to Nora"
          className="flex items-center gap-[11px] rounded-full bg-ink py-[10px] pl-3 pr-[18px] shadow-pill ring-1 ring-white/10"
        >
          <Image
            src="/images/nora.png"
            alt="Nora"
            width={32}
            height={32}
            className="h-8 w-8 flex-none rounded-full object-cover"
          />
          <div className="text-left">
            <div className="text-[13.5px] font-semibold leading-[1.2] text-white">Ask Nora</div>
            <div className="mt-[3px] font-mono text-[9.5px] font-medium leading-[1.3] tracking-[.1em] text-white/[.58]">
              CALL OR CHAT
            </div>
          </div>
        </button>
      ) : mode === "home" ? (
        <PanelShell>
          <div className="absolute right-3 top-3 z-10">{minimiseBtn(false)}</div>

          <div className="flex flex-1 flex-col items-center justify-center gap-5 bg-surface px-6 py-8 text-center">
            {/* Nora with a call sign */}
            <div className="relative">
              <span className="absolute inset-0 -m-1.5 animate-ping rounded-full bg-accent/25" />
              <Image
                src="/images/nora.png"
                alt="Nora"
                width={104}
                height={104}
                className="relative h-[104px] w-[104px] rounded-full object-cover ring-4 ring-white"
              />
              <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-surface bg-accent text-white">
                {phoneIcon(15)}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="text-[19px] font-bold leading-tight tracking-[-.02em] text-ink">
                Talk to Nora
              </div>
              <p className="text-[13.5px] leading-[1.55] text-ink/60">
                Have a real conversation about your project — she scopes it with you
                and lines up a licensed pro. No hold music.
              </p>
            </div>

            {/* Primary: call */}
            <button
              onClick={startCall}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-[15px] font-semibold leading-none text-white shadow-composer transition-transform hover:scale-[1.01]"
            >
              {phoneIcon(18)}
              Call Nora
            </button>

            {/* Alternate: chat */}
            <button
              onClick={() => setMode("chat")}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white px-5 py-3 text-[14px] font-semibold leading-none text-ink transition-colors hover:border-ink/30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v8a1.5 1.5 0 01-1.5 1.5H9l-4 4V5.5z"
                  fill="currentColor"
                />
              </svg>
              Chat by text instead
            </button>

            {voiceHint ? (
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-medium leading-tight text-accent-link">
                <span className="inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                Voice calls with Nora are coming soon — chat by text for now.
              </div>
            ) : null}
          </div>
        </PanelShell>
      ) : (
        <PanelShell>
          {/* Header */}
          <div className="flex items-center gap-2.5 bg-ink px-3.5 py-3">
            <button
              onClick={() => setMode("home")}
              aria-label="Back"
              className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="relative flex-none">
              <Image
                src="/images/nora.png"
                alt="Nora"
                width={34}
                height={34}
                className="h-[34px] w-[34px] rounded-full object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink bg-accent" />
            </div>
            <div className="flex-1">
              <div className="text-[14px] font-semibold leading-tight text-white">Nora</div>
              <div className="mt-[2px] font-mono text-[9.5px] font-medium uppercase leading-tight tracking-[.1em] text-white/55">
                AI assistant · online
              </div>
            </div>
            <button
              onClick={() => setMode("home")}
              aria-label="Call Nora"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-105"
            >
              {phoneIcon(15)}
            </button>
            {minimiseBtn(true)}
          </div>

          {/* Transcript */}
          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-surface px-3.5 py-4"
          >
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "max-w-[85%] self-end rounded-[14px_14px_4px_14px] bg-accent px-3.5 py-2.5 text-[13.5px] leading-[1.5] text-white"
                    : "max-w-[85%] self-start rounded-[14px_14px_14px_4px] bg-white px-3.5 py-2.5 text-[13.5px] leading-[1.5] text-ink shadow-card"
                }
              >
                {m.text}
              </div>
            ))}

            {typing ? (
              <div className="max-w-[85%] self-start rounded-[14px_14px_14px_4px] bg-white px-3.5 py-2.5 text-[13.5px] leading-[1.5] text-ink/45 shadow-card">
                Nora is typing…
              </div>
            ) : null}

            {showOptions ? (
              <div className="mt-1 flex flex-col items-start gap-2">
                {OPTIONS.map((o) => (
                  <button
                    key={o}
                    onClick={() => send(o)}
                    className="rounded-full border border-accent/40 bg-white px-3.5 py-2 text-left text-[13px] font-medium leading-tight text-accent-deep transition-colors hover:border-accent hover:bg-accent-tint"
                  >
                    {o}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Composer */}
          <div className="flex items-center gap-2 border-t border-line bg-white px-3 py-2.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send(input);
              }}
              placeholder="Type your message…"
              className="min-w-0 flex-1 bg-transparent text-[13.5px] leading-none text-ink outline-none placeholder:text-ink/40"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent text-white transition-opacity disabled:opacity-40"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.4 20.4l17.45-8.48a1 1 0 000-1.84L3.4 1.6a.7.7 0 00-.98.83L4.6 10.3c.07.28.07.57 0 .85l-2.18 7.42a.7.7 0 00.98.83z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </PanelShell>
      )}
    </div>
  );
}
