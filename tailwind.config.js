/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: "#7761FF",
      white: "#ffffff",
      dark: "#161621",
      darker: "#0E0E12",
    },
    extend: {
      spacing: {
        separator: "6rem",
      },
    },
  },
  plugins: [],
};
