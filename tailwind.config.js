/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#4CAF50",
        black: "#1C1C1C",
        white: "#ffffff",
        gray: "#E0E0E0",
        grayBig: "#2E2E2E",
        red: "#E74C3C",
      },
      fontSize: {
        small: "1rem",
        medium: "2rem",
        big: "3rem",
        icon: "1.1rem",
      },
      keyframes: {
        spin: {
          "100%": { transform: "rotate(1turn)" },
        },
        submitSpin: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1s infinite steps(8)",
        submitSpin: "submitSpin 1s linear infinite",
      },
      boxShadow: {
        custom: `
          calc(1 * 30px) calc(0 * 30px) 0 0 #1C1C1C,
          calc(0.707 * 30px) calc(0.707 * 30px) 0 1px #4CAF50,
          calc(0 * 30px) calc(1 * 30px) 0 2px #1C1C1C,
          calc(-0.707 * 30px) calc(0.707 * 30px) 0 3px #4CAF50,
          calc(-1 * 30px) calc(0 * 30px) 0 4px #1C1C1C,
          calc(-0.707 * 30px) calc(-0.707 * 30px) 0 5px #4CAF50,
          calc(0 * 30px) calc(-1 * 30px) 0 6px #1C1C1C
        `,
      },
    },
  },
  plugins: [],
};
