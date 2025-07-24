/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#e0f2fe',
          200: '#b3d9ff',
          300: '#66b3ff',
          600: '#0954ab',
          700: '#074080',
          800: '#052e5c',
          900: '#041f3d',
        },
        navy: {
          50: '#eff6ff',
          100: '#e0f2fe',
          200: '#b3d9ff',
          300: '#66b3ff',
          600: '#1350ab',
          700: '#074080',
          800: '#052e5c',
          900: '#041f3d',
        }
      },
      fontFamily: {
        sans: ['Mulish', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}