import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

// Site-wide social share image, generated at build time. Next wires the output
// into og:image (and twitter:image) automatically. Pages can add their own
// opengraph-image file to override this default.
export const alt = "MyHomeQuote — Tell us the project. We'll bring the pros.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Theme tokens mirrored from tailwind.config.ts / the homepage hero.
const INK = "#14171a";
const SURFACE = "#f8f9fa";
const ACCENT = "#1f9d78";
const ACCENT_LINK = "#0f7a5c";
const MUTED = "rgba(20,23,26,0.6)";

// Nora's photo, inlined so the image is self-contained (no domain needed).
const noraSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/images/nora.png"),
).toString("base64")}`;

/**
 * Fetch a .woff from the Fontsource CDN so the card renders in the real brand
 * fonts. Satori reads woff/ttf/otf (not woff2), so we use the woff builds.
 */
function loadFont(slug: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://cdn.jsdelivr.net/fontsource/fonts/${slug}@latest/latin-${weight}-normal.woff`;
  return fetch(url).then((r) => {
    if (!r.ok) throw new Error(`Could not load font: ${slug} ${weight}`);
    return r.arrayBuffer();
  });
}

export default async function OpengraphImage() {
  const [jakarta800, jakarta400, mono500] = await Promise.all([
    loadFont("plus-jakarta-sans", 800),
    loadFont("plus-jakarta-sans", 400),
    loadFont("ibm-plex-mono", 500),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          background: SURFACE,
          padding: 72,
          fontFamily: "Jakarta",
        }}
      >
        {/* Left: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Mono",
              color: ACCENT_LINK,
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Matched in one conversation
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div
              style={{
                display: "flex",
                color: INK,
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: -2.5,
              }}
            >
              Tell us the project. We&apos;ll bring the pros.
            </div>
            <div
              style={{
                display: "flex",
                color: MUTED,
                fontSize: 29,
                fontWeight: 400,
                lineHeight: 1.4,
                maxWidth: 620,
              }}
            >
              Nora sets you up with a licensed pro for a personalized quote.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: INK,
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: ACCENT,
              }}
            />
            MyHomeQuote
          </div>
        </div>

        {/* Right: Nora */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: 10,
              borderRadius: 999,
              background: "#ffffff",
              border: `6px solid ${ACCENT}`,
              boxShadow: "0 24px 60px -20px rgba(20,23,26,0.45)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={noraSrc}
              alt="Nora"
              width={300}
              height={300}
              style={{ borderRadius: 999, objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Mono",
              color: ACCENT_LINK,
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Nora · AI assistant
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jakarta", data: jakarta800, weight: 800, style: "normal" },
        { name: "Jakarta", data: jakarta400, weight: 400, style: "normal" },
        { name: "Mono", data: mono500, weight: 500, style: "normal" },
      ],
    },
  );
}
