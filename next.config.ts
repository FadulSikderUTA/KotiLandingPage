import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This block tells Vercel to ignore ESLint errors during the build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
