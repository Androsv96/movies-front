/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    formats: ["image/jpg"],
  },
};

module.exports = nextConfig;
