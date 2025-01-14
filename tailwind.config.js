/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        aid1: "url('/src/assets/bg1.webp')",
        aid2: "url('/src/assets/bg2.webp')",
      }),
    },
  },
  plugins: [],
}
