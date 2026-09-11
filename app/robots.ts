import type { MetadataRoute } from "next";

// Keep in sync with SITE_URL in app/layout.tsx until we centralise it.
const SITE_URL = "https://homecrew.com";

/**
 * robots.txt served at /robots.txt. Allows crawling of everything except the
 * /ava redirect route, and points crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/ava",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
