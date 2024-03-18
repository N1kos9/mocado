import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#54372a",
        secondColor: "#df582e",
        textColor: "#060413",
        containerCOlor: "#f8e4be",
        bgColor: "#f9f6f2",
        textAlterColor: "#94908e",
      },
      fontFamily: {
        poopins: ["Poopins", "sans-serif"],
        fontFamily2: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
