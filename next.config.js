/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  functions: {
    "api/**/*.js": {
      timeout: 60,
    },
  },
  images: {
    domains: ['downloads.hindawi.org'],
  },
}

module.exports = nextConfig
