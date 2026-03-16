/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#fdfbf9', 100: '#f8f4f0', 200: '#efe6dd', 300: '#e1d0c1', 400: '#d0b3a1', 500: '#c29a82', 600: '#b48166', 700: '#96664d', 800: '#7e5643', 900: '#664738' },
        accent: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b' },
        surface: '#fafafa',
        dark: '#18181b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Cinzel', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
