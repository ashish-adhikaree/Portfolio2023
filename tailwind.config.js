/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "var(--primary-green)",
          black: "var(--primary-black)",
          grey: "var(--primary-grey)",
          white: "var(--primary-white)"
        },
      },
    },
  },
  plugins: [],
}