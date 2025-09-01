/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          dark: '#0a1a2f',
        },
        yellow: {
          DEFAULT: '#fca311',
          light: '#ffe066',
        },
        accent: {
          DEFAULT: '#3A86FF', // blue accent for buttons/links
          light: '#A9D6E5', // soft blue for backgrounds/cards
        },
        coral: {
          DEFAULT: '#FF6B6B', // coral for highlights/errors
        },
        green: {
          DEFAULT: '#43AA8B', // green for success/positive
        },
        white: '#ffffff',
        gray: {
          light: '#f3f4f6',
          DEFAULT: '#e5e7eb',
          dark: '#6b7280',
        },
        sand: {
          DEFAULT: '#F7E9D7', // soft sand for backgrounds/sections
        },
      },
    },
  },
  plugins: [],
}
