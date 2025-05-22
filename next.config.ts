import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to succeed even if
    // your project has ESLint errors.
    ignoreDuringBuilds: isProd,
  },
};

export default nextConfig;

