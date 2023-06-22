// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deep_gray: '#15161A',
        deep_light: '#83888E',
        deep_main: '#472183'
      },
      fontFamily: {
        lora: ['var(--font-mont)', ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}