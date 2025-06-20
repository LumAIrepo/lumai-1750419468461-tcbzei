/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => { // Simplified webpack for browser fallbacks
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Essential for some Solana libs in browser
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
    };
    return config;
  },
};
module.exports = nextConfig;