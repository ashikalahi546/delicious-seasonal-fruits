/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#16282F',
        secondary:'#F6F6F6',
        success:'#012738',
      },
      letterSpacing:{
        normal:'3px',
      }
    },
  },
  plugins: [],
}

