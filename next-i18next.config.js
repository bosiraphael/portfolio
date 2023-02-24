module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
