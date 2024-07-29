/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'ml-responsive': 'max(5vh, 25px)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(240px, 1fr))',
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        '8-100': 'repeat(8, minmax(100px, 1fr))',
        '2-1-1': '2fr 1fr 1fr',
        '1-1.5-1-1-1-0.5': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.ml-responsive': {
          marginLeft: 'max(5vh, 25px)',
        },
      };
      addUtilities(newUtilities);
    },
    
  ],
}