import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MyHomeQuote collects, uses, shares, and protects your personal information, including cookies, advertising, and your US privacy rights.",
  alternates: { canonical: "/privacy" },
};

// Bracketed items are placeholders to complete before publishing:
// [COMPANY LEGAL NAME], [EFFECTIVE DATE], [privacy@yourdomain.com], [MAILING ADDRESS].
type Block = string | { sub: string } | { list: string[] };
interface Section {
  heading: string;
  blocks: Block[];
}

const SECTIONS: Section[] = [
  {
    heading: "1. Overview",
    blocks: [
      'This Privacy Policy explains how [COMPANY LEGAL NAME], doing business as MyHomeQuote ("MyHomeQuote," "we," "us," or "our"), collects, uses, shares, and protects personal information when you visit our website, chat with our AI assistant Nora, or otherwise use our services (together, the "Services").',
      "Our Services are intended for residents of the United States only. By using the Services, you agree to this Privacy Policy. If you do not agree, please do not use the Services.",
    ],
  },
  {
    heading: "2. Information we collect",
    blocks: [
      { sub: "Information you provide to us" },
      "When you chat with Nora, request a consultation, or otherwise contact us, we collect the information you choose to share, which may include your name, phone number, email address, home or mailing address (street, city, state, and ZIP code), details about your home improvement project, and your preferred times to be contacted.",
      "We also collect the content of your messages and communications with us, including everything you type into the chat.",
      { sub: "Information we collect automatically" },
      "When you use the Services, we and our partners automatically collect certain information using cookies and similar technologies, including your IP address, device and browser type, device identifiers, the pages and content you view, referring and exit pages, and the dates, times, and duration of your interactions.",
      { sub: "Information from third parties" },
      "We may receive information about you from our advertising and analytics partners and from the licensed contractors and partners we connect you with (for example, whether they were able to reach you).",
      { sub: "Sensitive information" },
      "We do not intentionally collect sensitive personal information (such as government IDs, financial account numbers, or health information). Please do not share information you consider sensitive through the chat.",
    ],
  },
  {
    heading: "3. About Nora, our AI assistant",
    blocks: [
      "Nora is an automated AI assistant, not a human. To generate responses, the messages you send are processed by our third-party AI provider, Google (Gemini). Please do not enter information into the chat that you would not want processed by an AI provider.",
      "Nora may collect the details described above to help scope your project and arrange a consultation with a licensed professional.",
    ],
  },
  {
    heading: "4. Cookies and tracking technologies",
    blocks: [
      "We and our partners use cookies, web beacons, pixels, local and session storage, and similar technologies to operate the Services, remember your preferences (for example, whether you have already seen the chat prompt), measure site traffic and performance, and deliver and measure advertising.",
      "We use these general categories of technologies:",
      {
        list: [
          "Essential: required for the site to function and to remember basic preferences.",
          "Analytics: help us understand how the Services are used and improve them (for example, Google Analytics or Vercel Analytics).",
          "Advertising and targeting: used by us and advertising partners (such as Google and Meta) to deliver, personalize, and measure ads, including retargeting.",
        ],
      },
      { sub: "Your choices" },
      "You can set your browser to refuse or delete cookies, though some features may not work as intended. You can opt out of interest-based advertising through the Digital Advertising Alliance (optout.aboutads.info), the Network Advertising Initiative (optout.networkadvertising.org), and your Google and Meta ad settings. You can also use our Do Not Sell or Share My Personal Information option described below.",
      "We honor recognized opt-out preference signals, such as the Global Privacy Control (GPC), where required by law. We do not currently respond to browser Do Not Track signals.",
    ],
  },
  {
    heading: "5. How we use your information",
    blocks: [
      "We use the information we collect to:",
      {
        list: [
          "Provide the Services, respond to your questions, and scope your project;",
          "Connect you with licensed contractors and partners and arrange consultations and quotes;",
          "Contact you by phone call, text message (SMS), or email about your request and appointment;",
          "Operate, maintain, secure, and improve the Services;",
          "Perform analytics and research to understand and improve how the Services are used;",
          "Deliver, personalize, and measure marketing and advertising;",
          "Detect, prevent, and address fraud, abuse, and security issues;",
          "Comply with legal obligations and enforce our terms.",
        ],
      },
      { sub: "Calls and texts" },
      "By providing your phone number, you agree that we and the contractors we match you with may contact you by phone call and text message about your request, including through automated technology. Consent is not a condition of any purchase. Message and data rates may apply. You can reply STOP to opt out of text messages and HELP for help.",
    ],
  },
  {
    heading: "6. How we share your information",
    blocks: [
      "We share personal information as follows:",
      {
        list: [
          "Matched contractors and partners: we share your contact and project details with licensed contractors, service professionals, and partners so they can contact you and provide quotes. They use your information under their own privacy policies.",
          "Service providers: we share information with vendors that process it on our behalf, including hosting and infrastructure (Vercel), AI processing (Google), analytics and advertising providers, and communications providers.",
          "Advertising partners: we may share identifiers and usage data with advertising partners to deliver and measure ads. Under some laws, this may be considered selling or sharing personal information (see Section 7).",
          "Legal and safety: to comply with applicable law, respond to lawful requests, and protect the rights, property, and safety of MyHomeQuote, our users, and others.",
          "Business transfers: in connection with a merger, acquisition, financing, or sale of all or part of our business.",
          "With your consent or at your direction.",
        ],
      },
    ],
  },
  {
    heading: "7. Your US privacy rights",
    blocks: [
      "Depending on where you live and applicable law (including the California Consumer Privacy Act, as amended by the CPRA), you may have the right to:",
      {
        list: [
          "Know and access the personal information we collect, use, and disclose;",
          "Delete personal information we have collected from you;",
          "Correct inaccurate personal information;",
          "Opt out of the sale or sharing of personal information and of targeted advertising;",
          "Limit the use and disclosure of sensitive personal information; and",
          "Not receive discriminatory treatment for exercising your rights.",
        ],
      },
      "To exercise these rights, contact us at [privacy@yourdomain.com] or use the Do Not Sell or Share option below. We will take steps to verify your identity before responding, and you may use an authorized agent to submit a request on your behalf. If we deny your request, you may appeal by contacting us at the same address.",
      { sub: "California Shine the Light" },
      "California residents may request information about our disclosure of personal information to third parties for their own direct marketing purposes by contacting us.",
      { sub: "Do Not Sell or Share My Personal Information" },
      "To opt out of the sale or sharing of your personal information and of targeted advertising, email us at [privacy@yourdomain.com] or enable a Global Privacy Control (GPC) signal in your browser.",
    ],
  },
  {
    heading: "8. Data retention",
    blocks: [
      "We retain personal information for as long as necessary to provide the Services, arrange and follow up on consultations, comply with our legal obligations, resolve disputes, and enforce our agreements. When it is no longer needed, we delete or de-identify it.",
    ],
  },
  {
    heading: "9. Data security",
    blocks: [
      "We use reasonable technical and organizational measures designed to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "10. Children's privacy",
    blocks: [
      "The Services are not directed to children under 16, and we do not knowingly collect personal information from them. If you believe a child has provided us personal information, please contact us and we will take appropriate steps to delete it.",
    ],
  },
  {
    heading: "11. Third-party links and services",
    blocks: [
      "The Services, and the contractors we connect you with, may link to or use third-party websites and services that we do not control. This Privacy Policy does not apply to those third parties, and we encourage you to review their privacy policies.",
    ],
  },
  {
    heading: "12. Changes to this policy",
    blocks: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the date below and, if the changes are material, provide additional notice. Your continued use of the Services after an update means you accept the revised policy.",
    ],
  },
  {
    heading: "13. Contact us",
    blocks: [
      "If you have questions about this Privacy Policy or how we handle your personal information, contact us at:",
      "[COMPANY LEGAL NAME] (MyHomeQuote), [MAILING ADDRESS], [privacy@yourdomain.com].",
    ],
  },
];

function renderBlock(block: Block, i: number) {
  if (typeof block === "string") {
    return (
      <p
        key={i}
        className="m-0 text-[15.5px] font-normal leading-[1.75] text-ink/[.78]"
      >
        {block}
      </p>
    );
  }
  if ("sub" in block) {
    return (
      <h3
        key={i}
        className="m-0 mt-2 text-[16px] font-semibold leading-[1.3] text-ink"
      >
        {block.sub}
      </h3>
    );
  }
  return (
    <ul key={i} className="m-0 flex list-disc flex-col gap-2 pl-5">
      {block.list.map((li, j) => (
        <li
          key={j}
          className="text-[15.5px] font-normal leading-[1.7] text-ink/[.78]"
        >
          {li}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex w-full max-w-[760px] flex-col gap-10">
          <div className="flex flex-col gap-[14px]">
            <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.14em] text-accent-link">
              Privacy
            </div>
            <h1 className="balance m-0 text-[32px] font-extrabold leading-[1.1] tracking-tighter2 text-ink sm:text-[42px]">
              Privacy Policy
            </h1>
            <p className="m-0 text-[13px] font-medium leading-none text-ink/45">
              Last updated: [EFFECTIVE DATE]
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="m-0 text-[20px] font-bold leading-[1.25] tracking-[-.02em] text-ink sm:text-[22px]">
                {section.heading}
              </h2>
              {section.blocks.map(renderBlock)}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
