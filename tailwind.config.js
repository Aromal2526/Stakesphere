/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary:"#3000EE",
        secondary:"#00FFE0",
      },
      backgroundImage:{
        view:"url('src/assets/BackgroundImage.png')",
        subview:"url(src/assets/secondaryImage.png)",
        aboutUs:"url(src/assets/main.png)",
        footer:"url(src/assets/background.svg)",
        blogsBg:"url(src/assets/Group3.png)"
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-border': {
          'border-image': 'linear-gradient(45deg, #00FFE0, #0047FF) 1',
          'border-image-slice': '1',
          'border-radius':'29px',
          'border-width':'2px'
        },
      };
      addUtilities(newUtilities, ['before', 'after']);
    },
  ],
}

