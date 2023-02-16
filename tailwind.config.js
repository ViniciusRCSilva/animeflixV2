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
      },
      boxShadow: {
        'image': 'inset 0 0 100px 50px #141414',
      },
      keyframes: {
        screenOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
        containerOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        }
      },
      animation: {
        screenOpacity: 'screenOpacity 1.5s ease-in-out',
        containerOpacity: 'containerOpacity 300ms ease-in-out',
      }
    },
  },
  plugins: [],
}
