/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    boxShadow: {
      DEFAULT: '0px 3px 12px rgba(0, 0, 0, 0.12)',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: 'rgb(255 255 255 / <alpha-value>)',
      },
      black: {
        light: 'rgb(128 128 128 / <alpha-value>)',
        DEFAULT: 'rgb(51 51  51 / <alpha-value>)',
      },
      grey: {
        transparent: 'rgb(51 51 51 / 0.04)',
        DEFAULT: 'rgb(224 224 224 / <alpha-value>)',
      },
      primary: {
        transparent: 'rgb(255 122 0 / 0.04)',
        light: 'rgb(255 122 0 / 0.6)',
        DEFAULT: 'rgb(255 122 0 / <alpha-value>)',
        dark: 'rgb(234 113 0 / <alpha-value>)',
      },
      danger: {
        transparent: 'rgb(225 33 16 / 0.04)',
        DEFAULT: 'rgb(225 33 16 / <alpha-value>)',
      },
    },
    extend: {
      aria: {
        invalid: 'invalid="true"',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
