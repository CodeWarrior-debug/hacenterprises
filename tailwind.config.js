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
        sm: '432px', 
        lsm: '560px', 
        lmm: '630px', 
        md: '768px', // => @media (min-width: 768px)  { ... }
        lg: '896px', // => @media (min-width: 1024px) { ... } 
        xl: '983px', // => @media (min-width: 1280px) { ... }
        
      },
      colors:{
        'regal-blue': '#0a3062',
        'aqua': '#02CCE3',
        'navy':'#000E24',
        'oxfordBlue':'#0A1F42',
        'tealish':'#028CB9',
        'medElecBlue':'#065B8D',
        'maroon':'#780000',
        'veniceRed':'#881512',
        'coolBlack':'#0A3062',
        'persian':'#005fa3'
      }

    },
  },
  plugins: [],
}