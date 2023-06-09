/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray82: '#828282',
        grayBD: '#BDBDBD',
        grayE0: '#E0E0E0',
        gray33: '#333333',
      }
    },
  },
  plugins: [],
}
