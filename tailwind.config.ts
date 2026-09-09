import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60/30/10 — clean white/grey base, charcoal grey, green for CTAs.
        ink: "#24282c", // dark charcoal grey (dark sections + text)
        surface: "#fafbfc", // near-white (dominant base)
        canvas: "#eef0f3", // light grey (alternating bands)
        line: "rgba(36,40,44,0.11)",
        accent: {
          DEFAULT: "oklch(0.52 0.13 165)",
          link: "oklch(0.46 0.12 165)",
          dark: "oklch(0.36 0.10 165)",
          deep: "oklch(0.42 0.12 165)",
          soft: "oklch(0.96 0.03 165)",
          tint: "oklch(0.97 0.02 165)",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-.038em",
        tighter2: "-.035em",
      },
      boxShadow: {
        composer: "0 22px 50px -22px rgba(36,40,44,.34)",
        float: "0 24px 60px -20px rgba(0,0,0,.5)",
        pill: "0 12px 34px -10px rgba(36,40,44,.5)",
        card: "0 1px 3px rgba(36,40,44,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
