module.exports = {
  i18n: {
    locales: ["en", "id", "ph", "vn", "my", "th", "kh", "pk", "in", "pt_BR"],
    defaultLocale: "id",
    localeDetection: false,
    domains: [
      {
        domain: "www.sehatcepat.com",
        defaultLocale: "id",
      },
      {
        domain: "www.sehatcepat.mobi",
        defaultLocale: "en",
      },
      {
        domain: "www.pagalingkaagad.com",
        defaultLocale: "ph",
      },
      {
        domain: "www.getwellsoon.mobi",
        defaultLocale: "pk",
      },
      {
        domain: "www.hairewna.com",
        defaultLocale: "th",
      },
      {
        domain: "www.khoingay.com",
        defaultLocale: "vn",
      },
      {
        domain: "www.lekaspulih.com",
        defaultLocale: "my",
      },
      {
        domain: "www.getwellsoon.asia",
        defaultLocale: "in",
      },
      {
        domain: "www.fiquebomlogo.com",
        defaultLocale: "pt_BR",
      },
    ],
  },
  react: {
    useSuspense: false,
  }, //this line
  localePath: typeof window === "undefined" ? require("path").resolve("./public/locales") : "/locales",
};
