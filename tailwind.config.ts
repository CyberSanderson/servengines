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
        // The Navy Blue (Your "Executive" Primary)
        indigo: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98', 
          600: '#0f172a', // Navy Blue
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // THE FIX: Brighter, Metallic Gold
        gold: {
          500: '#EAB308', // <--- Much brighter (Yellow-500)
          600: '#CA8A04', // Hover state (Yellow-600)
        }
      },
    },
  },
  plugins: [],
};
export default config;