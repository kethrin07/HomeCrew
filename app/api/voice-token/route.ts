import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

// Mints a short-lived ElevenLabs WebRTC token for the browser to start a voice
// session with Nora. The API key stays server-side and is never sent to the
// client — the browser only ever receives the ephemeral token.
export const runtime = "nodejs";
// Never cache: each call must return a fresh token.
export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const agentId = process.env.ELEVENLABS_AGENT_ID;

  if (!apiKey || !agentId) {
    console.error(
      "[voice-token] missing env:",
      !apiKey ? "ELEVENLABS_API_KEY" : "",
      !agentId ? "ELEVENLABS_AGENT_ID" : "",
    );
    return new Response("Voice agent not configured", { status: 503 });
  }

  try {
    const client = new ElevenLabsClient({ apiKey });
    const { token } = await client.conversationalAi.conversations.getWebrtcToken(
      { agentId },
    );
    return Response.json({ token });
  } catch (err) {
    // Log the real reason (bad agent id, insufficient key scope, etc.) to the
    // server only; the client just gets a generic failure.
    console.error("[voice-token] failed to mint token:", err);
    return new Response("Failed to mint voice token", { status: 502 });
  }
}
