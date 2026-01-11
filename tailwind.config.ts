// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // REPLACE THE DEFAULT INDIGO WITH "EXECUTIVE NAVY"
        indigo: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98', 
          600: '#0f172a', // <--- Your new Primary Brand Color (Deep Navy)
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // ADD A GOLD ACCENT FOR BUTTONS OR HIGHLIGHTS
        gold: {
          500: '#d97706', // Use 'text-gold-500' or 'bg-gold-500'
          600: '#b45309', // Hover state
        }
      },
    },
  },
  plugins: [],
};
export default config;