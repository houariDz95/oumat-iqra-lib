/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  env: {
    RAPIDEAPI_KEY: process.env.RAPIDEAPI_KEY,
    
  },
  images: {
    domains: ['downloads.hindawi.org'],
  },
}

module.exports = nextConfig
