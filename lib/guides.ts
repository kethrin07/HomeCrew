/**
 * Guide/blog catalog. `slug` is set once a guide has a real page at
 * /guides/<slug>; entries without a slug render as "coming soon" on the index.
 * `date` (ISO) drives newest-first ordering on the index.
 */
export interface Guide {
  tag: string;
  readTime: string;
  title: string;
  description: string;
  date: string; // ISO date, e.g. "2026-02-18"
  slug?: string;
}

export const GUIDES: Guide[] = [
  {
    slug: "kitchen-30k",
    tag: "Budgeting",
    readTime: "8 min",
    date: "2026-09-15",
    title: "What a mid-range kitchen actually buys you in 2026",
    description:
      "It averages about $28,000 nationally and can return more than it costs at resale. Where the money goes, and how to keep it from ballooning.",
  },
  {
    tag: "Hiring",
    readTime: "5 min",
    date: "2026-02-05",
    title: "Nine questions to ask before you sign a contract",
    description:
      "The questions that separate a smooth renovation from an expensive surprise.",
  },
  {
    tag: "Permits",
    readTime: "4 min",
    date: "2026-01-28",
    title: "Which jobs need a permit, by state",
    description:
      "A quick reference for when your project needs sign-off, and when it doesn't.",
  },
  {
    tag: "Bathrooms",
    readTime: "6 min",
    date: "2026-01-15",
    title: "What a mid-range bathroom remodel covers, fixture by fixture",
    description:
      "From the vanity to the valves, what your budget actually stretches to.",
  },
  {
    tag: "Roofing",
    readTime: "5 min",
    date: "2026-01-06",
    title: "Repair or replace? Five signs your roof is out of time",
    description:
      "How to tell the difference before a small leak becomes a big one.",
  },
  {
    tag: "Resale",
    readTime: "6 min",
    date: "2025-12-19",
    title: "Kitchen vs. bathroom: which remodel actually pays back at resale",
    description:
      "The rooms buyers care about most, and what tends to earn its keep.",
  },
  {
    tag: "Quick wins",
    readTime: "4 min",
    date: "2025-12-08",
    title: "Seven low-cost upgrades that make an older home feel new",
    description: "Small changes with an outsized effect on how a home feels.",
  },
  {
    tag: "Budgeting",
    readTime: "6 min",
    date: "2025-11-24",
    title: "Build a renovation budget with a buffer that actually holds",
    description:
      "How to plan for the surprises that show up once the walls are open.",
  },
  {
    tag: "Electrical",
    readTime: "5 min",
    date: "2025-11-10",
    title: "Six warning signs your home's wiring is overdue",
    description: "What to watch for, and when it's worth calling a pro.",
  },
  {
    tag: "Outdoor",
    readTime: "7 min",
    date: "2025-10-27",
    title: "Deck materials, 10-year cost compared: wood vs. composite vs. PVC",
    description: "The real long-term cost once upkeep is in the picture.",
  },
  {
    tag: "Planning",
    readTime: "5 min",
    date: "2025-10-13",
    title: "A realistic renovation timeline, week by week",
    description: "What actually happens, and when, on a typical remodel.",
  },
  {
    tag: "Energy",
    readTime: "6 min",
    date: "2025-09-30",
    title: "Insulation or new windows: where your money saves more",
    description: "Which upgrade pays you back faster on the energy bill.",
  },
];
