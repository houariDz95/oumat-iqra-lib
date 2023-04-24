/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  apiTimeout: 30000,
  images: {
    domains: ['downloads.hindawi.org'],
  },
}

module.exports = nextConfig
