import type { NextConfig } from "next";

// Static export: `npm run build` produces a plain HTML/CSS/JS site in `out/`
// that can be hosted free on Netlify or Cloudflare Pages.
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // In `npm run dev`, Next doesn't serve public/admin/index.html at /admin/,
  // so map it here. (On the live static site the host does this automatically.)
  ...(isDev && {
    async rewrites() {
      return [
        { source: "/admin", destination: "/admin/index.html" },
        { source: "/admin/", destination: "/admin/index.html" },
      ];
    },
  }),
};

export default nextConfig;
