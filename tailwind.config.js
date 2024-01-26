/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        current: 'currentColor',
        primary: '#E97D80',
        secondary: '#EBEBEB',
        grey: '#A6ABB2',
        lightgrey: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
