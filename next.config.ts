import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable typedRoutes as it's causing build issues with API routes
  // typedRoutes: true,
};

export default nextConfig;