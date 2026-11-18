import type { NextConfig } from "next";

// Static export: `npm run build` produces a plain HTML/CSS/JS site in `out/`
// that can be hosted free on Cloudflare Pages or Netlify.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
