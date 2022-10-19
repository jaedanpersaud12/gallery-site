/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: "#f94144",
        ora: "#f8961e",
        yel: "#f9c74f",
        gre: "#43aa8b",
        blu: "#277da1",
      },
    },
  },
  plugins: [],
}
