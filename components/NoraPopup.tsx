"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GREETING } from "@/lib/nora";

// How long the visitor browses before Nora proactively says hello, and the
// session key that keeps it to once per visit.
const DELAY_MS = 10_000;
const SEEN_KEY = "nora-popup-seen";

// One-tap starting points so visitors don't have to think of what to type.
const QUICK_OPTIONS = [
  "A new kitchen",
  "A fresh bathroom",
  "Some roof help",
  "My deck or yard",
];

/**
 * Centered modal that appears after the visitor has been on the site for a
 * while. It previews Nora's greeting and offers Chat or Call, both of which
 * hand off to the existing <NoraChat> widget via the `nora:open` event.
 */
export function NoraPopup() {
  const [mounted, setMounted] = useState(false); // in the DOM
  const [visible, setVisible] = useState(false); // animated in
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  // Tracks whether the <NoraChat> widget is currently open, so we never pop
  // over an active conversation.
  const chatOpen = useRef(false);

  useEffect(() => {
    const onChange = (e: Event) => {
      chatOpen.current = Boolean((e as CustomEvent).detail?.open);
    };
    window.addEventListener("nora:openchange", onChange);
    return () => window.removeEventListener("nora:openchange", onChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SEEN_KEY)) return;

    const timer = window.setTimeout(() => {
      // Don't interrupt if the visitor already has the chat widget open.
      if (chatOpen.current) return;
      sessionStorage.setItem(SEEN_KEY, "1");
      setMounted(true);
      // Next frame so the entrance transition runs.
      requestAnimationFrame(() => setVisible(true));
    }, DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  // Close on Escape while open.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted]);

  // Autofocus the input only on pointer (desktop) devices, so we don't force the
  // on-screen keyboard open the moment the popup appears on phones.
  useEffect(() => {
    if (mounted && window.matchMedia("(pointer: fine)").matches) {
      inputRef.current?.focus();
    }
  }, [mounted]);

  const close = () => {
    setVisible(false);
    window.setTimeout(() => setMounted(false), 200);
  };

  const openWidget = (mode: "chat" | "home") => {
    window.dispatchEvent(new CustomEvent("nora:open", { detail: { mode } }));
    close();
  };

  // Carry a message straight into the chat widget, which picks up the
  // conversation from Nora's greeting. Used by both the input and the chips.
  const startChat = (text: string) => {
    const t = text.trim();
    if (!t) return;
    window.dispatchEvent(
      new CustomEvent("nora:open", { detail: { mode: "chat", seed: t } }),
    );
    close();
  };

  if (!mounted) return null;

  const phoneIcon = (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.15.39 2.37.59 3.6.59a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.46.59 3.6a1 1 0 01-.25 1z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="A message from Nora"
      onClick={close}
      className={`fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-5 pt-[12vh] transition-opacity duration-200 sm:items-center sm:pt-5 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "rgba(20,23,26,0.5)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-float transition-all duration-200 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close */}
        <button
          onClick={close}
          aria-label="Dismiss"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-ink/65 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {/* Nora */}
        <div className="flex flex-col items-center gap-4 bg-surface px-6 pb-5 pt-8">
          <div className="relative">
            <span className="absolute inset-0 -m-1.5 animate-ping rounded-full bg-accent/25" />
            <Image
              src="/images/nora.png"
              alt="Nora"
              width={72}
              height={72}
              className="relative h-[72px] w-[72px] rounded-full object-cover ring-4 ring-white"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-surface bg-accent" />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="text-[15px] font-bold leading-tight tracking-[-.02em] text-ink">
              Nora
            </div>
            <div className="font-mono text-[9.5px] font-medium uppercase leading-tight tracking-[.1em] text-accent-link">
              AI assistant · online
            </div>
          </div>
        </div>

        {/* Greeting + live chat */}
        <div className="flex flex-col gap-3 px-6 pb-6 pt-5">
          <div className="self-start rounded-[14px_14px_14px_4px] bg-[#f1f3f4] px-[14px] py-[11px] text-[14px] leading-[1.5] text-ink">
            {GREETING}
          </div>

          {/* Quick starting points */}
          <div className="flex flex-wrap gap-2">
            {QUICK_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => startChat(opt)}
                className="rounded-full border border-accent/40 bg-white px-3.5 py-2 text-[12.5px] font-medium leading-tight text-accent-deep transition-colors hover:border-accent hover:bg-accent-tint"
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Composer — typing here carries straight into the chat */}
          <div className="flex items-center gap-2 rounded-xl border border-ink/15 bg-white px-3 py-2 transition-colors focus-within:border-accent">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") startChat(input);
              }}
              placeholder="Type your message…"
              className="min-w-0 flex-1 bg-transparent text-[14px] leading-none text-ink outline-none placeholder:text-ink/40"
            />
            <button
              onClick={() => startChat(input)}
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent text-white transition-opacity disabled:opacity-40"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.4 20.4l17.45-8.48a1 1 0 000-1.84L3.4 1.6a.7.7 0 00-.98.83L4.6 10.3c.07.28.07.57 0 .85l-2.18 7.42a.7.7 0 00.98.83z" fill="currentColor" />
              </svg>
            </button>
          </div>

          {/* Call alternative */}
          <button
            onClick={() => openWidget("home")}
            className="flex items-center justify-center gap-1.5 text-[12.5px] font-medium leading-none text-ink/65 transition-colors hover:text-accent-link"
          >
            {phoneIcon(13)}
            or give Nora a call instead
          </button>
        </div>
      </div>
    </div>
  );
}
