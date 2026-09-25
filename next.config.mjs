/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats (AVIF first, WebP fallback) for all next/image usage.
    formats: ["image/avif", "image/webp"],
    // Allowed quality values. 75 is the default; 60 is used for the large
    // before/after gallery photos that sit behind a comparison slider.
    qualities: [60, 75],
  },
  experimental: {
    // Inline the (small) CSS bundle into the HTML <head> instead of loading it
    // as a separate render-blocking <link>, removing it from the critical path.
    inlineCss: true,
  },
};

export default nextConfig;
