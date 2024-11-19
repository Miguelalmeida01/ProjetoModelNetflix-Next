/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            pathname: '/**',
          },
        ],
      },

};

export default nextConfig;

// next.config.js


  