/** @type {import('tailwindcss').config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        tokyo: {
          bg: '#24283b',
          sidebar: '#1f2335',
          status: '#16161e',
          text: '#a9b1d6',
          accent: '#7aa2f7',
        },
      },
    },
  },
  plugins: [],
}
