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
        "primary": "#422f25",
        "secondary": "#be945b",
        "accent": "#dfcc75",
        "base-100": "#52843c",
        "base-200": "#75a663",
        "base-300": "#98c38a",
      },
    }],
  },
  plugins: [require("daisyui")],
};
export default config;
