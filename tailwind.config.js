/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outline': ['outfit', 'sans-serif'],
        'title': ['Big Shoulders Display', 'sans-serif'],
      },
      colors: {
        'primary': '#66BB6A',
        
      }
    },
  },
  plugins: [],
}