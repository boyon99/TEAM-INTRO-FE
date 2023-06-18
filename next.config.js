/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://43.201.194.212:8080/api/:path*",
        destination: "https://taeheoki.shop:443/api/:path*",
      },
    ];
  },
  
}

module.exports = nextConfig

