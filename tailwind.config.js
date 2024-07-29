/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.5)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
        },
      },
      animation: {
        'gradient-move': 'gradient 10s ease infinite',
        'slide-in': 'slide 1s ease-out forwards',
        'slide-in-right-to-left': 'slideRightToLeft 1s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-in-out forwards',
      },
      backgroundImage: {
        'header-img': "url('/assets/header_img.jpg')",
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(240px, 1fr))',
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        '8-100': 'repeat(8, minmax(100px, 1fr))',
        '2-1-1': '2fr 1fr 1fr',
        '1-1.5-1-1-1-0.5': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
        
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}