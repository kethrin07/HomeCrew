import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HomeCrew Warm — cream / forest green / terracotta.
        ink: "#23261f", // body ink (near-black)
        surface: "#f6f1e6", // page cream
        canvas: "#efe8d8", // deeper cream — blog band, card bodies, reply bubbles
        sand: "#f3e7cf", // badge tiles
        line: "rgba(35,38,31,0.12)",
        accent: {
          DEFAULT: "#b45a28", // terracotta
          link: "#b45a28",
          dark: "#8e4419", // dark terracotta
          deep: "#8e4419",
          soft: "#e0a87a", // warm tan (accents on dark)
          tint: "#f0dcc9",
        },
        // Green band + deep green CTA.
        olive: {
          DEFAULT: "#4e6b47", // forest green (how-it-works band)
          dark: "#3e5a38", // deep green (CTA, user bubbles, launcher, headings)
          light: "#61805a", // media placeholders in the green band
        },
        brown: {
          DEFAULT: "#57452f",
          dark: "#3f301f",
        },
        taupe: {
          DEFAULT: "#847b68",
          dark: "#6d6552",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-display)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.038em",
        tighter2: "-.035em",
      },
      boxShadow: {
        composer: "0 22px 50px -22px rgba(42,32,24,.34)",
        float: "0 24px 60px -20px rgba(20,14,8,.5)",
        pill: "0 12px 34px -10px rgba(42,32,24,.55)",
        card: "0 1px 3px rgba(42,32,24,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
