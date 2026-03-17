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
        "green-deep":  "#2d7a3a",
        "green-mid":   "#4aab5a",
        "green-light": "#a8e6b0",
        "green-pale":  "#e8f7ea",
        "aqua":        "#3bbfb2",
        "aqua-light":  "#b2eae5",
        "brand-yellow":"#f5c842",
        "yellow-light":"#fef3c7",
        "feather":     "#5ba4d4",
        "cream":       "#fdfaf3",
        "text-dark":   "#1a2e1c",
        "text-mid":    "#3d5c42",
        "text-muted":  "#7a9e80",
      },
      fontFamily: {
        sans:    ["Nunito", "sans-serif"],
        display: ["Fraunces", "serif"],
      },
      borderRadius: {
        "card": "20px",
        "card-sm": "12px",
      },
      backgroundImage: {
        "hero-green":   "linear-gradient(145deg, #2d7a3a 0%, #4aab5a 60%, #3bbfb2 100%)",
        "hero-feather": "linear-gradient(160deg, #2d7a3a, #5ba4d4)",
        "btn-primary":  "linear-gradient(135deg, #2d7a3a, #3bbfb2 200%)",
        "bar-green":    "linear-gradient(90deg, #4aab5a, #3bbfb2)",
        "bar-aqua":     "linear-gradient(90deg, #3bbfb2, #5ba4d4)",
        "bar-yellow":   "linear-gradient(90deg, #f5c842, #ffdd44)",
        "bar-vocab":    "linear-gradient(90deg, #8dd99a, #4aab5a)",
        "xp-bar":       "linear-gradient(90deg, #f5c842, #ffdd44)",
      },
    },
  },
  plugins: [],
};
export default config;
