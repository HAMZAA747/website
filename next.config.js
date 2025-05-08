// File: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable loading env variables prefixed with NEXT_PUBLIC_ automatically
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  images: {
    // if you host images on an external CDN, add domains here
    domains: [],
    // set deviceSizes if you want to control responsive image breakpoints
    deviceSizes: [640, 768, 1024, 1280, 1440],
  },
  // You can add other Next.js options here (e.g., rewrites, redirects)
};

module.exports = nextConfig;
