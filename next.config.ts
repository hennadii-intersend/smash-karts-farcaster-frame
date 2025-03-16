import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure headers to allow cross-origin for our iframe
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.crazygames.com;
              frame-src 'self' https://*.crazygames.com;
              img-src 'self' https://*.crazygames.com https://imgs.crazygames.com data:;
              style-src 'self' 'unsafe-inline';
              connect-src 'self' https://*.crazygames.com;
              media-src 'self' https://*.crazygames.com;
              worker-src 'self' blob:;
              child-src 'self' blob:;
            `.replace(/\s+/g, ' ').trim()
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ];
  },
  
  // Configure image domains to allow images from crazygames
  images: {
    domains: ['img.crazygames.com', 'imgs.crazygames.com', 'www.crazygames.com'],
  },
  
  // Ensure we can properly handle the Farcaster Frame SDK
  transpilePackages: ['@farcaster/frame-sdk'],
};

export default nextConfig;
