/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  maximumFileSizeToCacheInBytes: 5000000,
});
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = withPWA({
  reactStrictMode: false,
  ...nextConfig,
});
