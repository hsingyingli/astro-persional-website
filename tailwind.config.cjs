/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        open: {
          '0%': { transform: 'scale(0.2)' },
          '50%': { transform: 'scale(0.6)' },
          '100%': { transform: 'scale(1)' }
        },
        textbounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1, 0.5)' },
          '40%': { transform: 'scale(1, 1.2)' },
          '50%': { transform: 'scale(0.8, 1)' },
          '60%': { transform: 'scale(1, 1.2)' },
          '75%': { transform: 'scale(0.8, 1)' }
        },
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-40px)'
          },
          '75%': {
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: 1,
          }
        }
      },
      animation: {
        textbounce: 'textbounce 1.5s ease-in-out infinite',
        "dot-bounce": 'dot-bounce 1.4s infinite ease-in-out both',
      },
      fontFamily: {
        'sans': ['"M PLUS Rounded 1c"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
  darkMode: 'class',
}
