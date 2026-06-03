import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#080f0a",
          900: "#0d1a10",
          850: "#111f15",
          800: "#152a1c",
          750: "#1a3323",
          700: "#1f3d2b",
          600: "#264d35",
          500: "#2e6044",
          400: "#3a7856",
          300: "#4d9970",
          200: "#6ab98a",
          100: "#9dd4b0",
          50: "#d0ead9",
        },
        cream: "#f0f7f2",
        gold: "#c9a84c",
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
