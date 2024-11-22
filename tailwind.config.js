/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_bg: '#181818',
        second_bg: '#232427',
        aksen_bg: '#DA0138',
        primary_text: '#C8C8C9',
        second_text: '#232427',
        aksen_text: '#DA0138',
        primary_card: '#47484D',
        second_card: '#47484D',
      },
    },
  },
  plugins: [],
}