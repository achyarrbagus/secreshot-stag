/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  output: "export",
};

module.exports = withPWA({
  reactStrictMode: false,
  ...nextConfig,
});
