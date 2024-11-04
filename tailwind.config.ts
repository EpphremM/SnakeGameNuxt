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
          bg: "#03130c",
          "bg-lighter": "#242225",
          "bright-yellow": "#f0d800",
          "bright-green": "#03ae34",
          "lighter-gray": "#cbd2ce",
          "darker-gray": "#4c5345",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
