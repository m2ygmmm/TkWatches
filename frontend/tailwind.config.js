const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lexend': ['Lexend', 'sans-serif'],
        'EB_Garamond': ['EB Garamond', 'sans-serif'],
        'Brygada': ['Brygada 1918', 'sans-serif']
      },
      animation: {
				fade: 'fadeIn 1.5s ease-in-out',
			},
      screens: {
        'gridsm': '761px'
      },

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
    },
    colors: {
      'blackShade': '#0a0a0a',
      'blackShadeLighter': '#1a1a1a',
      transparent: 'transparent',
        current: 'currentColor',
        'black': '#000000',
        'stone': '#A8A8A8',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
    },
  },
  
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

