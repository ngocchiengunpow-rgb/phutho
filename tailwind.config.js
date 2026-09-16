/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f2',
          100: '#def0e3',
          200: '#bedfc9',
          300: '#91c7a7',
          400: '#5fa781',
          500: '#3a8b61',
          600: '#2a6f4c',
          700: '#22593e',
          800: '#1c4632',
          900: '#14532d',
          950: '#0c3820',
        },
        chalk: {
          50: '#faf8f5',
          100: '#f3f1eb',
          200: '#e7e4dc',
          300: '#d7d2c6',
          400: '#b8b1a2',
          500: '#9b9383',
        },
        charcoal: {
          50: '#f6f7f6',
          100: '#e5e7e6',
          200: '#ccd1cf',
          300: '#a7b0ac',
          400: '#7e8b85',
          500: '#63706a',
          600: '#4d5954',
          700: '#3f4945',
          800: '#353e3a',
          900: '#1d2621',
          950: '#111814',
        },
        tea: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#0c3820',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
