/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ← Esta linha resolve o problema!
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
