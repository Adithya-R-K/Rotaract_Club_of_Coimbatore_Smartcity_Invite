/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local placeholder images only. Add remote domains here if you later
    // host photos externally (e.g. Cloudinary, S3).
    remotePatterns: []
  }
};

module.exports = nextConfig;
