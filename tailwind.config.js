/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/last-section/about-us.jpg')",
        "footer-texture": "url('/src/img/hero/hero-1.jpg')",
      },

      screens: {
        'tablet': '300px',
    
      
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
});
