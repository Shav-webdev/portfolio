import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
