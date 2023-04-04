/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "rgb(var(--primary-green)/<alpha-value>)",
          black: "rgb(var(--primary-black)/<alpha-value>)",
          grey: "rgb(var(--primary-grey)/<alpha-value>)",
          white: "rgb(var(--primary-white)/<alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
