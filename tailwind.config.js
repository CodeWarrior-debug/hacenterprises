// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'regal-blue': '#0A2854',
      }

    },
  },
  plugins: [require("daisyui")],
}