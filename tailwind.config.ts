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
        // PRIMARY: "Executive Navy" (Keep this, it's excellent)
        indigo: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98', 
          600: '#0f172a', // Deep Navy for buttons/links
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // ACCENT: "Profit Green" (Replaces Gold)
        // This is a rich, minty emerald that looks expensive.
        gold: {
          500: '#10B981', // Emerald-500 (Use this for text highlights)
          600: '#059669', // Emerald-600 (Use for hover states)
        }
      },
    },
  },
  plugins: [],
};
export default config;