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
    },
  },
  plugins: [],
};
