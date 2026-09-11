import type { MetadataRoute } from "next";

// Keep in sync with SITE_URL in app/layout.tsx until we centralise it.
const SITE_URL = "https://homecrew.com";

/**
 * Sitemap served at /sitemap.xml. Lists indexable routes only. /nora is
 * excluded because it redirects to the homepage. Add new guides/category
 * pages here (or generate them) as they ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/categories`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/kitchen-30k`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
