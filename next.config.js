/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['downloads.hindawi.org'],
  },
}

module.exports = nextConfig
