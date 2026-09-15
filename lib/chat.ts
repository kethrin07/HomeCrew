/**
 * Client helper that streams Nora's reply from /api/chat. Both chat surfaces
 * (the widget and the /nora flow) use this so the stream-reading logic lives in
 * one place. Throws on a non-OK response so callers can fall back to the
 * scripted noraReply().
 */
export type ChatRole = "user" | "assistant";
export interface ChatMessage {
  role: ChatRole;
  content: string;
}

/**
 * POSTs the conversation and streams the response. `onDelta` is called with the
 * full text accumulated so far each time a chunk arrives, so callers can render
 * the reply as it grows. Resolves with the final text.
 */
export async function streamNora(
  messages: ChatMessage[],
  onDelta: (textSoFar: string) => void,
): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok || !res.body) {
    throw new Error(`Chat request failed: ${res.status}`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let text = "";

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    text += decoder.decode(value, { stream: true });
    onDelta(text);
  }

  return text;
}
