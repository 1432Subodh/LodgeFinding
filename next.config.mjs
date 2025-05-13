/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", "placehold.co"],
      },
       experimental: {
    appDir: true, // Ensure App Router is enabled for Next.js 13+
  },
};

export default nextConfig;
