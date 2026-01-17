/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static fayllar yaratish rejimini yoqadi
  images: {
    unoptimized: true, // Static exportda rasmlar xato bermasligi uchun
  },
};

export default nextConfig;