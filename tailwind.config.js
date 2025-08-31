/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#F16122',
        secondary: '#498CDB',
        neutral: '#2D374F',
        lightBg: '#ffffff',
        lightText: '#1a1a1a',

        // Dark mode overrides
        dark: {
          bg: '#151515',
          text: '#f5f5f5',
          card: '#1f1f1f',
          border: '#2a2a2a',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
