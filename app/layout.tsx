import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { NoraChat } from "@/components/NoraChat";
import { NoraPopup } from "@/components/NoraPopup";
import { JsonLd } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://homecrew.com";
const SITE_NAME = "MyHomeQuote";
const DEFAULT_TITLE = "MyHomeQuote: Tell us your project, we'll bring the pros.";
const DEFAULT_DESCRIPTION =
  "Just tell Nora what you have in mind and she'll set you up with a trusted local pro for a personalized quote. No forms, no call center, no chasing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: [
    "home renovation",
    "kitchen remodel",
    "bathroom remodel",
    "roofing",
    "licensed contractors",
    "renovation quotes",
    "home improvement",
    "find a contractor",
  ],
  alternates: {
    canonical: "/",
  },
  // Temporary favicon / touch icon from the uploaded logo.
  icons: {
    icon: "/images/logohome.png",
    apple: "/images/logohome.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Site-wide structured data: who the brand is (Organization) and the site
// itself (WebSite), linked by @id so page-level schema can reference the org.
const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      image: `${SITE_URL}/opengraph-image`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} scroll-smooth`}>
      <body className="font-sans">
        <JsonLd data={SITE_SCHEMA} />
        {children}
        <NoraChat />
        <NoraPopup />
      </body>
    </html>
  );
}
