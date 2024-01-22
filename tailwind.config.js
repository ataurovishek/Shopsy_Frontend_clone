/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'-12px 7px 10px rgba(0,0,0,0.6)'
      }
    },
  },
  plugins: [],
}

