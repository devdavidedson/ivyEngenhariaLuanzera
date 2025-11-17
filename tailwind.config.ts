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
        orange: {
          DEFAULT: "#FF9933",
        },
        blue: {
          DEFAULT: "#1987D9",
        },
        dark: {
          DEFAULT: "#141A26",
        },
        gray: {
          75: "#404040",
          50: "#808080",
          25: "#BFBFBF",
        },
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

