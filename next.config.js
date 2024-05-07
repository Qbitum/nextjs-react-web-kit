/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: ['@qbitum/react-flat-ui'],
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
    return [
      {
        source: '/mock/:slug*',
        destination: 'http://52.53.116.106:9080/mock/web/:slug*',

      },
      {
        source: '/api/:path*',
        destination: 'https://devlabelinspector.qbitum.net/api/:path*',
      }
    ]
  },

}

module.exports = nextConfig



