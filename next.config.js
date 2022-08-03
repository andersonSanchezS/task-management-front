/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost:3000','source.unsplash.com'],

  }
}

module.exports = nextConfig
