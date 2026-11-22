import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only - emit a full static site into ./out
  output: 'export',

  images: {
    // The default Next.js image optimizer needs a server; static export serves images as-is
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
    ],
  },
};

export default nextConfig;
