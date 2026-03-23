import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["DM Mono", "monospace"],
        display: ["Syne", "sans-serif"],
        body: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        bg:      "#07090d",
        bg1:     "#0c1018",
        bg2:     "#111720",
        bg3:     "#171f2a",
        accent:  "#63c3ff",
        accent2: "#00e5b0",
        accent3: "#ff6b35",
        muted:   "#5a7590",
        muted2:  "#3a5068",
        textcol: "#c8ddef",
      },
    },
  },
  plugins: [],
};
export default config;
