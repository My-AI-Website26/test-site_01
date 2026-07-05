import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FBF5EA",
          200: "#F5EAD4",
          300: "#EEDDB8",
        },
        ink: "#33261E",
        terracotta: {
          400: "#D08554",
          500: "#C1653B",
          600: "#A8502B",
          700: "#8A4023",
        },
        olive: {
          500: "#5B6B3F",
          600: "#485530",
          700: "#39421F",
        },
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(51,38,30,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        soft: "0 12px 32px -12px rgba(51, 38, 30, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
