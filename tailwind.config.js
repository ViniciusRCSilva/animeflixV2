/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      textColor: {
        "red-netflix": "#E50914",
        "gray-unselected": "#e5e5e5"
      },
      backgroundColor: {
        "background": "#141414",
        "red-netflix": "#E50914"
      }
    },
  },
  plugins: [],
}
