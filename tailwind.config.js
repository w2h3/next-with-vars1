const { convertCompilerOptionsFromJson } = require('typescript');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: {
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
      boxShadow: {
        good: '4px 4px 0 0px rgba(0, 0, 0, 0.3)',
        border:
          'text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
      },

      colors: {
        wcyan: '#107E8E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Sora'],
        nexa: ['NexaDemo-Bold'],
        roboto: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
  ],
};
