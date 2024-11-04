// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  tailwindcss: {
    exposeConfig: true,
    configPath: "~/tailwind.config.ts",
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
});
