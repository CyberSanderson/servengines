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
        // OVERRIDE: Changes all "indigo" classes to this Deep Navy
        // This instantly makes your buttons and accents look "Executive"
        indigo: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98', 
          600: '#0f172a', // Main Buttons/Links will be this dark navy
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // NEW: Adds Gold for accents
        gold: {
          500: '#d97706', // Amber-600 equivalent
          600: '#b45309',
        }
      },
    },
  },
  plugins: [],
};
export default config;