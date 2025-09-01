import { s } from "vite/dist/node/types.d-aGj9QkWt";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 30s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        en: ["Ebrima", "sans-serif"],
        ar: ["GE SS TWO", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#ffffff",
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#999999",
          500: "#666666", // Base primary
          600: "#4d4d4d",
          700: "#333333",
          800: "#1a1a1a",
          900: "#000000",
        },
        secondary: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        accent: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },

        "heavy-accent": "#DC2626",
      },
    },
  },
  plugins: [],
};
