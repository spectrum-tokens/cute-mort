import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", 
  ],
  theme: {
    fontFamily: {
      grandstander: ["Grandstander", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [{
      madagascar: {        
        "primary": "#8B4513",        
        "accent": "black",
        "base-content": "black",
        "base-100": "#2B7C43",
        "base-200": "#6AA53C",
        "base-300": "#A5D042",
      },
    }],
  },
  plugins: [require("daisyui")],
};
export default config;
