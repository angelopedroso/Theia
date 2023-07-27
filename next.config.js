/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pps.whatsapp.net',
        port: '',
        pathname: '/v/**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
