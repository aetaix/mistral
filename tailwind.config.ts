import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Fustat", "sans-serif"],
    },
    extend: {
      colors: {
        black:'#080808',
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: 'FE0207',
      
        orange: {
          600: "#FE4900",
          500: "#FF7000"
        },
        yellow: {
          500: "#FEA401",
          400: "#FECE00"
        },
        purple: {
          50:'#FAF3FF',
          100:"#F5E8FF",
          400:"#CA79F9"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
