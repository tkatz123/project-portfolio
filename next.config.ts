import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site builds to plain HTML/CSS/JS in `out/`,
  // deployable to Vercel, GitHub Pages, or any static host.
  output: "export",
  images: {
    // next/image optimization requires a server; static export serves files as-is.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
