/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
//   register: true, // Register the PWA service worker
//   skipWaiting: true, // Skip waiting for service worker activation
// });
// const nextConfig = {};
const nextConfig = {
  output: "export",
};

module.exports = nextConfig;

// module.exports = withPWA({
//   reactStrictMode: false,
//   output: "export",
//   env: {
//     URL_API: process.env.URL_API,
//     URL_NEXT: process.env.URL_NEXT,
//     URL_APISURKIT: process.env.URL_APISURKIT,
//     SENDBIRD_APP_ID: process.env.SENDBIRD_APP_ID,
//     SENDBIRD_USER_ID: process.env.SENDBIRD_USER_ID,
//     SENDBIRD_API_TOKEN: process.env.SENDBIRD_API_TOKEN,
//     SENDBIRD_ACCESS_TOKEN: process.env.SENDBIRD_ACCESS_TOKEN,
//   },
//   ...nextConfig,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "api.cepatsehat.com",
//         pathname: "/uploads/**",
//       },
//     ],
//   },
// });
