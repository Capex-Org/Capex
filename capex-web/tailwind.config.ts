import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px", // Custom breakpoint for 1600px and up
      },
    },
  },
  plugins: [animate],
} satisfies Config;
