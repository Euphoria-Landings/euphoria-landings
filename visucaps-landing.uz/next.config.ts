/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML rejimini tanladik
  images: {
    unoptimized: true, // Static exportda rasmlarni optimizatsiya qilish uchun
  },
};

export default nextConfig;