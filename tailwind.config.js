/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        kaushan: ['Kaushan Script', 'cursive'],
        raleway:["Raleway", "sans-serif"],
        mono: ["Space Mono", 'monospace'],
        montserrat: ["Montserrat", "sans-serif"],
       
        // Add more font families as needed
      },
      animation: {
        'spin-slow': "spin 3s linear infinite",
      },
    },
    
  },
  plugins: [],
}

