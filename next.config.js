/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {};

module.exports = withPWA({
  reactStrictMode: false,
  env: {
    URL_API: process.env.URL_API,
    URL_NEXT: process.env.URL_NEXT,
    URL_APISURKIT: process.env.URL_APISURKIT,
    SENDBIRD_APP_ID: process.env.SENDBIRD_APP_ID,
    SENDBIRD_USER_ID: process.env.SENDBIRD_USER_ID,
    SENDBIRD_API_TOKEN: process.env.SENDBIRD_API_TOKEN,
    SENDBIRD_ACCESS_TOKEN: process.env.SENDBIRD_ACCESS_TOKEN,
  },
  i18n,
  ...nextConfig,
});
