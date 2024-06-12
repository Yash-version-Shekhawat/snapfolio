/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calc-100-minus-80': 'calc(100% - 80px)',
        'calc-100-minus-60': 'calc(100% - 60px)',
      },
      fontFamily: {
        'sans': ['Montserrat Subrayada', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

