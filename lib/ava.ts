"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Role = "a" | "u";
export interface Message {
  text: string;
  role: Role;
}

export type ChatTone = "Concise" | "Warm";

/**
 * Ava's canned reply logic, ported from the design's support.js Component.
 * Keyword-matches the homeowner's message and answers in the configured tone.
 */
export function avaReply(text: string, _tone: ChatTone = "Concise"): string {
  void _tone;
  const t = text.toLowerCase();
  if (t.includes("roof"))
    return "Roofing moves fast. Is water coming in now, or is it age? I'll get an expert to call you either way.";
  if (t.includes("bath"))
    return "Full gut or fixtures and finishes? Once I know, I'll have an expert ring you with a number.";
  return "Got it. Is the sink staying put, and what's your ceiling on spend? Then I'll have an expert call you back.";
}

const INITIAL: Message[] = [
  { text: "Hi — what are we working on?", role: "a" },
  {
    text: "My kitchen. It's a 1970s galley and the cabinets are shot.",
    role: "u",
  },
];

/**
 * Shared chat state used by the hero composers and the Ava flow.
 * Mirrors the state machine in support.js: pushing a user message appends
 * both the message and Ava's reply, and clears the input.
 */
export function useAvaChat(tone: ChatTone = "Concise") {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Message[]>(INITIAL);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const push = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      setMsgs((prev) => [
        ...prev,
        { text, role: "u" },
        { text: avaReply(text, tone), role: "a" },
      ]);
      setInput("");
    },
    [tone],
  );

  const send = useCallback(
    () => push(input || "Kitchen refresh — where do I start?"),
    [push, input],
  );

  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs]);

  return { input, setInput, msgs, push, send, transcriptRef };
}
