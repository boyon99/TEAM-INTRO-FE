/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://43.201.194.212:8080/:path*",
      },
    ];
  },
  
}

module.exports = nextConfig

