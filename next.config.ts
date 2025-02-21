import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // This tells Next.js to generate a fully static export.
  images: {
    unoptimized: true,
  },
  basePath: "/cover-page",
  assetPrefix: "/cover-page",
  // any other config options...
};

export default nextConfig;
