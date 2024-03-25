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
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(auto, 200px))",
        "custom-3": "repeat(3, 250px)",
        "auto-fit-minmaxx": "repeat(auto-fit, minmax(240px, auto))",
      },
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
