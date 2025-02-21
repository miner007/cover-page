import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures a fully static export
  images: {
    unoptimized: true, // Required for Next.js static export
  },
  basePath: "/cover-page", // GitHub Pages repository name
  assetPrefix: "/cover-page/", // Ensure assets load correctly
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": "./components", // Fix for alias imports
      "@/radix-ui": "./radix-ui", 
      "@/lib/utils": "./lib/utils", 
    };
    return config;
  },
};

export default nextConfig;
