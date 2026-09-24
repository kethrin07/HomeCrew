/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats (AVIF first, WebP fallback) for all next/image usage.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Inline the (small) CSS bundle into the HTML <head> instead of loading it
    // as a separate render-blocking <link>, removing it from the critical path.
    inlineCss: true,
  },
};

export default nextConfig;
