

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        "slide-in-right": {
          // '0%': { width: "100%", right: "0" },
          // '100%': { width: "66px", right: "-80px" },
          "0%": { opacity: '0' },
          "95%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
        'slide-in-right-holder': {
          '0%': { right: "-80px", width: "66px" },
          '100%': { right: "0px", width: "100%" },
        },
        "slide-in-bottom": {
          '0%': { width: "100%", top: "0", left: "0", },
          "100%": { width: "206px", top: "140px", left: "0" },
        }

      },
      animation: {
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.3s ease-out forwards ',
        "slide-in-right-holder": 'slide-in-right-holder 0.3s ease-out forwards',
        "slide-in-bottom": 'slide-in-bottom 0.3s ',
      },
    },
  },
  plugins: [],
}