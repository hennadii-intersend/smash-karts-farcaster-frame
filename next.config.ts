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
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.crazygames.com https://*.smashkarts.io https://smashkarts.io;
              frame-src 'self' https://*.crazygames.com https://*.smashkarts.io https://smashkarts.io;
              img-src 'self' https://*.crazygames.com https://imgs.crazygames.com https://*.smashkarts.io https://smashkarts.io data:;
              style-src 'self' 'unsafe-inline';
              connect-src 'self' https://*.crazygames.com https://*.smashkarts.io https://smashkarts.io;
              media-src 'self' https://*.crazygames.com https://*.smashkarts.io https://smashkarts.io;
              worker-src 'self' blob:;
              child-src 'self' blob:;
              frame-ancestors 'self' https://*.farcaster.xyz https://*.warpcast.com;
            `.replace(/\s+/g, ' ').trim()
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ];
  },
  
  // Configure image domains to allow images from crazygames and smashkarts
  images: {
    domains: ['img.crazygames.com', 'imgs.crazygames.com', 'www.crazygames.com', 'smashkarts.io'],
  },
  
  // Ensure we can properly handle the Farcaster Frame SDK
  transpilePackages: ['@farcaster/frame-sdk'],
};

export default nextConfig;
