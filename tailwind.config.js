/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Merriweather", 'serif'],
      },
      colors:{
        primaryblack:"#00000",
        brandYellow:"#fdc62e",
        brandGreen:"#2dcc6f",
        brandBlue:"#1376f4",
        brandWhite:"#eee"
      },
      container:{
        center:true,
        padding:{
        DEFAULT:"1rem",
        sm:"3rem"
        }
      }
    },
  },
  plugins: [],
}

