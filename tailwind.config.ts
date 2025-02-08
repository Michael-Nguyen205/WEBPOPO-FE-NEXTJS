import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidingUp: {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slidingDown: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'sliding-up': 'slidingUp 10s linear infinite',
        'sliding-down': 'slidingDown 10s linear infinite',
        'sliding-up-2': 'slidingUp 12s linear infinite',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
            primary: "var(--primarycolor)",
            secondary: "var(--secondarycolor)", // Thêm màu phụ


      },
    },
  },
  plugins: [],
};

export default config;
