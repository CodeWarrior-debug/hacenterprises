// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: '320px',
        sm: '401px',
        lsm: '560px',
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        'regal-blue': '#0A2854',
        'aqua': '#02CCE3',
        'navy':'#000E24'

      }

    },
  },
  plugins: [],
}