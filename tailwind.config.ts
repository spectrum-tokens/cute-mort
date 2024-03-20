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
        "primary": "#F1AA47",
        "secondary": "#be945b",
        "accent": "#8B4513",
        "base-100": "#738C3C",
        "base-200": "#8CA653",
        "base-300": "#A6B673"
      },
    }],
  },
  plugins: [require("daisyui")],
};
export default config;
