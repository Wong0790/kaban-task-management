// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-quasar-ui",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Plus+Jakarta+Sans": [400, 500, 700],
        },
      },
    ],
  ],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "dark",
  },
  quasar: {
    config: {
      brand: {
        primary: "#635fc7",
        secondary: "#efeffa",
        accent: "#9C27B0",

        dark: "#000112",

        positive: "#21BA45",
        negative: "#ea5555",
        info: "#31CCEC",
        warning: "#F2C037",
      },
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
