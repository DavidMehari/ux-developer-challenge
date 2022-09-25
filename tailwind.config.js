/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#141414',
          90: '#191919',
          80: '#1E1E1E',
          70: '#232323',
          60: '#282828',
          50: '#2D2D2D ',
          40: '#323232',
          30: '#373737',
          20: '#3C3C3C',
          10: '#414141',
        },
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
