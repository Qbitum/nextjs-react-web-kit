/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {

    if (dev) {
      config.watchOptions = {
        followSymlinks: true,
      }
    }

    config.snapshot.managedPaths = [];
    return config;
  },
  async rewrites() {
    const apiEndpoint = process.env.BASE_API_ENDPOINT; // Access environment variable
    return [
      {
        // source: '/api/:path*',
        // destination: 'https://devlabelinspector.qbitum.net/api/:path*',
        source: '/api/:path*',
        destination: `${apiEndpoint}/api/:path*`,
      }
    ]
  },

}
// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); 


module.exports = nextConfig

