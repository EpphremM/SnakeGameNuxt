import type { Config } from "tailwindcss";

export default {
  CSS: "~/assets/css/tailwind.css",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0f1116",
          "bg-lighter": "#1d1e24",
          "normal-text": "#fffeff",
          "special-bg": "#0052b3",
          "sub-text": "#d4dbe7",
          "darker-gray": "#4c5345",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
