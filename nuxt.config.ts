// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    atlasUrl: process.env.ATLAS_URL || "",
    atlasPassword: process.env.ATLAS_PASSWORD || "",
    port: process.env.PORT,
  },
});
