/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#0284c7',
        'sky-blue': '#e0f2fe',
        'bot-orange': '#f59e0b',
      },
    },
  },
  plugins: [], 
}
