/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bu qator juda muhim!
  images: {
    unoptimized: true, // Statik eksportda rasmlar xato bermasligi uchun
  },
};

export default nextConfig;