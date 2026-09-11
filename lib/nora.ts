"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Default greeting and quick replies for Nora's chat popup. */
export const GREETING =
  "Hi there! I'm Nora, an AI assistant with MyHomeQuote. I help homeowners think through projects like kitchens, baths, roofing, and more. What's on your mind today?";

export const OPTIONS = [
  "I need my kitchen remodeled",
  "I'm planning a bathroom reno",
  "My roof needs attention",
  "Just exploring for now",
];

export type Role = "a" | "u";
export interface Message {
  text: string;
  role: Role;
}

export type ChatTone = "Concise" | "Warm";

/**
 * Nora's canned reply logic, ported from the design's support.js Component.
 * Keyword-matches the homeowner's message and answers in the configured tone.
 */
export function noraReply(text: string, tone: ChatTone = "Concise"): string {
  const concise = tone === "Concise";
  const t = text.toLowerCase();
  if (t.includes("roof"))
    return concise
      ? "Roofing. Any active leak, or is this age-related?"
      : "Roofs are the one we move fastest on. Is water coming in right now, or is it more that the roof has had its run?";
  if (t.includes("bath"))
    return concise
      ? "Bathroom. Full gut, or fixtures and finishes only?"
      : "Nice one to start with. Are we talking a full gut, or swapping fixtures and finishes and keeping the layout?";
  return concise
    ? "Got it. Are you keeping the sink where it is, and what's your ceiling on spend?"
    : "Okay, that's a very common one and we have good pros for it. Two quick things: does the sink stay put, and what number would you rather not go past?";
}

const INITIAL: Message[] = [
  { text: "Hi, what are we working on?", role: "a" },
  {
    text: "My kitchen. It's a 1970s galley and the cabinets are shot.",
    role: "u",
  },
];

/**
 * Shared chat state used by the hero composers and the Nora flow.
 * Mirrors the state machine in support.js: pushing a user message appends
 * both the message and Nora's reply, and clears the input.
 */
export function useNoraChat(tone: ChatTone = "Concise") {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Message[]>(INITIAL);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const push = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      setMsgs((prev) => [
        ...prev,
        { text, role: "u" },
        { text: noraReply(text, tone), role: "a" },
      ]);
      setInput("");
    },
    [tone],
  );

  const send = useCallback(
    () => push(input || "Kitchen refresh, where do I start?"),
    [push, input],
  );

  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs]);

  return { input, setInput, msgs, push, send, transcriptRef };
}
