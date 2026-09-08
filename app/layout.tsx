import type { Metadata } from "next";
import { Karla, Oswald } from "next/font/google";
import "./globals.css";
import { NoraChat } from "@/components/NoraChat";

// Humanist body face.
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

// Condensed uppercase display for headings, buttons, nav and labels.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HomeCrew — Tell us the project. We'll bring the pros.",
  description:
    "Describe what you want done and Nora lines up three licensed pros with real quotes. No forms, no call centre, no chasing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${karla.variable} ${oswald.variable} scroll-smooth`}>
      <body className="font-sans">
        {children}
        <NoraChat />
      </body>
    </html>
  );
}
