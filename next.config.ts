import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Images configuration
  images: {
    // This allows all images, local or external, to load without optimization
    unoptimized: true,
    // Use remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aprilhansen.com',
      },
      {
        protocol: 'https',
        hostname: 'staging.aprilhansen.com',
      },
      {
        protocol: 'https',
        hostname: 'freeforcharity.org',
      },
    ],
  },
  // Optional: base path and asset prefix if using a subdirectory deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
