import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  eslint: {
    ignoreDuringBuilds: true, // Suppress ESLint warnings during production builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'http',
        hostname: 'supabasekong-uo4sccc0c88so0ow4s4c84g0.77.37.67.4.sslip.io',
      },
    ],
  },
};

export default nextConfig;
