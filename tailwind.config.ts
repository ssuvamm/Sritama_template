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
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Lato", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          300: '#FFF0C3',
          400: '#E6C280',
          500: '#D4AF37',
          600: '#AA8820',
          700: '#806310',
        },
      },
    },
  },
  plugins: [],
};

export default config;

