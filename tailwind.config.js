/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#62d2a2',
        'secondary': '#5bc142',
      },
    },
  },
  plugins: [],
}
