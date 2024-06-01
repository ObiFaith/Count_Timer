/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      yellow: {
        100: '#eece6f', /* bg ->  f5dc7d*/
        200: '#ffe377', /* timer  */
        400: '#ffda72', /* re.wind */
        600: '#ecca6b', /* bg-svg */
        800: '#d4b460', /* remainder -> eac769 */
      },
    },
    extend: {
      colors: {
        brown: {
          900: '#150405', /* 14 */
          800: '#1a0809', /* svg */
          600: '#282322', /* bg -> 211210 */
          500: '#211210',
          400: '#483420', /* remainder */
          200: '#4e402d', /* timer */
        },
      },
      width: {'2ch': '2ch'},
    },
  },
  plugins: [],
}

