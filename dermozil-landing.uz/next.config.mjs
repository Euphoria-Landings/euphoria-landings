/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export rejimini yoqish
  output: 'export',
  // Rasmlar optimizatsiyasini static export uchun o'chirib turish (yoki moslashtirish)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;