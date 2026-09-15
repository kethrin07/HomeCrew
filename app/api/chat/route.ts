import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { SYSTEM_PROMPT } from "@/lib/nora-prompt";

// Node.js runtime (default) — full Node APIs, streaming works out of the box.
export const runtime = "nodejs";
// Nora's replies are short; leave headroom for streaming.
export const maxDuration = 30;

const MODEL = "gemini-3.6-flash";
const MAX_MESSAGES = 12; // only send the tail of the conversation
const MAX_CHARS = 2000; // per-message content cap

type Role = "user" | "assistant";
interface ChatMessage {
  role: Role;
  content: string;
}

function sanitize(raw: unknown): ChatMessage[] | null {
  if (!Array.isArray(raw)) return null;
  const cleaned: ChatMessage[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") continue;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    const text = content.trim().slice(0, MAX_CHARS);
    if (!text) continue;
    cleaned.push({ role, content: text });
  }
  return cleaned.length ? cleaned.slice(-MAX_MESSAGES) : null;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const messages = sanitize((body as { messages?: unknown })?.messages);
  if (!messages) {
    return new Response("No valid messages", { status: 400 });
  }

  const result = streamText({
    model: google(MODEL),
    system: SYSTEM_PROMPT,
    messages,
  });

  // Plain text stream — the client reads it directly and appends tokens.
  return result.toTextStreamResponse();
}
