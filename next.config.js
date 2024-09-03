/** @type {import('next').NextConfig} */
<<<<<<< HEAD
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
=======
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41
