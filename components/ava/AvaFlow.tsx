"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { avaReply, type Message } from "@/lib/ava";

const QUICK_REPLIES = ["Keeping the sink", "Not sure yet", "Under $35k"];
const CALL_TIMES = [
  "As soon as possible",
  "Weekday mornings",
  "Weekday evenings",
  "Weekends",
];

interface CallbackForm {
  name: string;
  phone: string;
  zip: string;
}

/**
 * The Ava intake flow (design 1g): three panels — a live chat that collects
 * the project, a callback form, and the queue confirmation. `seed` is an
 * optional opening message carried over from the hero composer.
 *
 * The chat is scripted for now (see lib/ava). The voice buttons are stubs that
 * will be wired to the ElevenLabs conversational agent later — search for
 * `TODO(elevenlabs)`.
 */
export function AvaFlow({ seed }: { seed?: string }) {
  const [msgs, setMsgs] = useState<Message[]>([
    { text: "Hi — what are we working on?", role: "a" },
    {
      text: "Kitchen. 1970s galley, about 120 sq ft. Cabinets are shot.",
      role: "u",
    },
    {
      text: "Got it. Two quick ones: is the sink staying where it is, and what's your rough ceiling on spend?",
      role: "a",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [callTime, setCallTime] = useState(CALL_TIMES[0]);
  const [form, setForm] = useState<CallbackForm>({ name: "", phone: "", zip: "" });
  const [submitted, setSubmitted] = useState(false);
  const [voiceHint, setVoiceHint] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // If the homeowner arrived with a project from the hero, add it to the thread.
  useEffect(() => {
    const q = seed?.trim();
    if (!q) return;
    setMsgs((prev) => [
      ...prev,
      { text: q, role: "u" },
      { text: avaReply(q), role: "a" },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the transcript pinned to the latest message.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing]);

  const push = (text: string) => {
    if (!text.trim() || typing) return;
    setMsgs((prev) => [...prev, { text, role: "u" }]);
    setInput("");
    setTyping(true);
    // Simulate Ava composing a reply so the "TYPING…" state reads as real.
    const reply = avaReply(text);
    window.setTimeout(() => {
      setMsgs((prev) => [...prev, { text: reply, role: "a" }]);
      setTyping(false);
    }, 650);
  };

  // TODO(elevenlabs): replace with a call into the ElevenLabs voice agent.
  const startVoice = () => setVoiceHint(true);

  // A plain-language summary built from what the homeowner has actually said,
  // so the callback + confirmation panels reflect the real conversation.
  const projectSummary = useMemo(() => {
    const said = msgs
      .filter((m) => m.role === "u")
      .map((m) => m.text.trim())
      .filter(Boolean);
    return said.length ? said.join(" · ") : "your project";
  }, [msgs]);

  const phoneDigits = form.phone.replace(/\D/g, "");
  const canSubmit =
    form.name.trim().length > 1 &&
    form.zip.trim().length >= 5 &&
    phoneDigits.length >= 10;

  const submit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  const set = (key: keyof CallbackForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className="mx-auto max-w-[1180px] px-6 py-[34px] sm:px-8">
      <div className="grid grid-cols-1 items-stretch gap-[18px] lg:grid-cols-3">
        {/* Panel 1 — chat */}
        <section className="flex flex-col overflow-hidden rounded-[16px] border border-ink/10 bg-white">
          <div className="flex items-center gap-[10px] border-b border-line px-[18px] py-[14px]">
            <div className="h-6 w-6 rounded-full bg-accent" />
            <div>
              <div className="text-[13px] font-semibold leading-[1.2] text-ink">Ava</div>
              <div className="mt-[2px] font-mono text-[10px] font-medium leading-[1.2] text-accent-link">
                {typing ? "TYPING…" : "ONLINE"}
              </div>
            </div>
            <span className="ml-auto font-mono text-[10.5px] font-medium leading-none tracking-[.1em] text-ink/35">
              STEP 1 / 3
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-[18px]">
            <div ref={scrollRef} className="flex max-h-[420px] flex-1 flex-col gap-3 overflow-y-auto">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "u"
                      ? "max-w-[88%] self-end rounded-[14px_14px_4px_14px] bg-accent px-[14px] py-[11px] text-[14.5px] font-normal leading-[1.5] text-white"
                      : "max-w-[88%] self-start rounded-[14px_14px_14px_4px] bg-[#f1f3f4] px-[14px] py-[11px] text-[14.5px] font-normal leading-[1.5] text-ink"
                  }
                >
                  {m.text}
                </div>
              ))}

              {typing ? (
                <div className="max-w-[88%] self-start rounded-[14px_14px_14px_4px] bg-[#f1f3f4] px-[14px] py-[11px] text-[14.5px] font-normal leading-[1.5] text-ink/50">
                  Ava is typing…
                </div>
              ) : null}

              <div className="mt-[2px] flex flex-wrap gap-[7px]">
                {QUICK_REPLIES.map((r, idx) => (
                  <button
                    key={r}
                    onClick={() => push(r)}
                    className={
                      idx === 0
                        ? "inline-flex items-center rounded-full border border-accent px-3 py-[7px] text-[12.5px] font-medium leading-[1.35] text-accent-deep"
                        : "inline-flex items-center rounded-full border border-ink/[.14] px-3 py-[7px] text-[12.5px] font-medium leading-[1.35] text-ink/65"
                    }
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto flex items-center gap-2 border-t border-line pt-[14px]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") push(input);
                }}
                placeholder="Type a reply…"
                className="min-w-0 flex-1 border-none bg-transparent text-[14px] font-normal leading-[1.3] text-ink outline-none placeholder:text-ink/45"
              />
              <span className="font-mono text-[11px] font-medium leading-none text-ink/35">or</span>
              <button
                onClick={startVoice}
                className="whitespace-nowrap rounded-lg border border-ink/[.14] bg-white px-[13px] py-[9px] text-[12.5px] font-semibold leading-[1.35] text-ink"
              >
                ● Speak
              </button>
            </div>
            {voiceHint ? (
              <div className="font-mono text-[10.5px] font-medium leading-[1.4] text-accent-link">
                Voice with Ava is coming soon — type for now.
              </div>
            ) : null}
          </div>
        </section>

        {/* Panel 2 — callback form */}
        <section className="flex flex-col overflow-hidden rounded-[16px] border border-ink/10 bg-white">
          <div className="flex items-center border-b border-line px-[18px] py-[14px]">
            <div className="text-[13px] font-semibold leading-[1.2] text-ink">
              Where should the expert reach you?
            </div>
            <span className="ml-auto font-mono text-[10.5px] font-medium leading-none tracking-[.1em] text-ink/35">
              STEP 2 / 3
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-[14px] p-[18px]">
            <div className="rounded-xl bg-accent-tint px-[14px] py-3 text-[14px] font-normal leading-[1.55] text-accent-dark">
              Here&apos;s what I&apos;ve got: <strong>{projectSummary}.</strong> An
              expert will price it properly with you.
            </div>

            <div className="flex flex-col gap-[9px]">
              <input
                value={form.name}
                onChange={set("name")}
                placeholder="Full name"
                autoComplete="name"
                className="rounded-[10px] border border-ink/[.13] px-[13px] py-[11px] text-[14px] font-normal leading-none text-ink outline-none placeholder:text-ink/45 focus:border-accent"
              />
              <input
                value={form.phone}
                onChange={set("phone")}
                placeholder="Phone number"
                type="tel"
                autoComplete="tel"
                className="rounded-[10px] border border-ink/[.13] px-[13px] py-[11px] text-[14px] font-normal leading-none text-ink outline-none placeholder:text-ink/45 focus:border-accent"
              />
              <input
                value={form.zip}
                onChange={set("zip")}
                placeholder="ZIP code"
                inputMode="numeric"
                autoComplete="postal-code"
                className="rounded-[10px] border border-ink/[.13] px-[13px] py-[11px] text-[14px] font-normal leading-none text-ink outline-none placeholder:text-ink/45 focus:border-accent"
              />
            </div>

            <div className="mt-1 font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/40">
              Good times to call
            </div>
            <div className="grid grid-cols-2 gap-2">
              {CALL_TIMES.map((t) => (
                <button
                  key={t}
                  onClick={() => setCallTime(t)}
                  className={
                    callTime === t
                      ? "rounded-[9px] bg-ink px-0 py-[11px] text-center text-[12.5px] font-semibold leading-[1.35] text-white"
                      : "rounded-[9px] border border-ink/[.13] px-0 py-[11px] text-center text-[12.5px] font-medium leading-[1.35] text-ink/70"
                  }
                >
                  {t}
                </button>
              ))}
            </div>

            <button
              onClick={submit}
              disabled={!canSubmit}
              className="mt-auto rounded-[10px] bg-accent p-[14px] text-[14.5px] font-semibold leading-none text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitted ? "Callback requested ✓" : "Request my callback"}
            </button>
            <div className="text-center text-[12px] font-normal leading-[1.5] text-ink/50">
              No card, no commitment. One expert, not a call list.
            </div>
          </div>
        </section>

        {/* Panel 3 — queue confirmation */}
        <section className="flex flex-col overflow-hidden rounded-[16px] border border-ink/10 bg-white">
          <div className="flex items-center border-b border-line px-[18px] py-[14px]">
            <div className="text-[13px] font-semibold leading-[1.2] text-ink">
              You&apos;re in the queue
            </div>
            <span className="ml-auto font-mono text-[10.5px] font-medium leading-none tracking-[.1em] text-ink/35">
              STEP 3 / 3
            </span>
          </div>

          {submitted ? (
            <div className="flex flex-1 flex-col gap-[14px] p-[18px]">
              <div className="flex items-center gap-3 rounded-xl bg-accent-tint p-[14px]">
                <div className="hatch h-10 w-10 flex-none rounded-full" />
                <div>
                  <div className="text-[13.5px] font-semibold leading-[1.3] text-ink">
                    Marcus Boyd — kitchen expert
                  </div>
                  <div className="text-[12.5px] font-normal leading-[1.4] text-accent-dark">
                    Will call you within 2 hours
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <div className="text-[22px] font-bold leading-[1.25] tracking-[-.025em] text-ink">
                  {form.name.split(" ")[0]}, expect a call on {form.phone}
                </div>
                <div className="text-[14px] font-normal leading-[1.55] text-ink/60">
                  He has your notes already, so it&apos;s a real conversation — not a
                  repeat of the last ten minutes.
                </div>
              </div>

              <div className="flex flex-col gap-2 rounded-xl bg-surface p-[14px]">
                <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.1em] text-ink/[.42]">
                  What Ava passed on
                </div>
                <div className="text-[13.5px] font-normal leading-[1.6] text-ink/[.68]">
                  {projectSummary} · {form.zip} · call {callTime.toLowerCase()}
                </div>
              </div>

              <div className="mt-auto flex gap-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="flex-1 rounded-[9px] border border-ink/[.14] bg-white p-3 text-[13px] font-semibold leading-none text-ink"
                >
                  Edit my details
                </button>
                <button
                  onClick={startVoice}
                  className="flex-1 rounded-[9px] bg-ink p-3 text-[13px] font-semibold leading-none text-white"
                >
                  Call now instead
                </button>
              </div>
              <div className="text-center text-[12px] font-normal leading-[1.5] text-ink/50">
                We&apos;ll text a summary either way.
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 p-[18px] text-center">
              <div className="hatch h-12 w-12 rounded-full" />
              <div className="text-[15px] font-semibold leading-[1.3] text-ink">
                Almost there
              </div>
              <div className="max-w-[240px] text-[13.5px] font-normal leading-[1.55] text-ink/55">
                Add your details and request a callback — your matched expert shows
                up here.
              </div>
            </div>
          )}
        </section>
      </div>

      <p className="mt-8 text-center text-[13px] leading-[1.6] text-ink/50">
        <Link href="/">← Back to HomeCrew</Link>
      </p>
    </div>
  );
}
