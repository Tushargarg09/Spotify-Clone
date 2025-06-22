/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        spotify: '#1DB954',
        dark: '#121212',
        lightDark: '#181818',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
