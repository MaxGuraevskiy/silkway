/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.leroymerlin.ru",
        port: "",
        pathname: "/lmru/image/upload/**",
      },

      {
        protocol: "https",
        hostname: "graphicdesignjunction.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "guraevskiy.ru",
        port: "",
        pathname: "/_next/**",
      },
    ],
  },
};

module.exports = nextConfig;
