/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://taeheoki.shop:443/api/:path*",
      },
    ];
  },
  
}

module.exports = nextConfig

