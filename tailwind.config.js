/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'type': 'type 2s steps(21) forwards',
        'blink': 'blink 1s step-end infinite', // Add the blink animation
      },
      keyframes: {
        type: {
          '0%': { width: '0' }, 
          '100%': { width: '19ch' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' }, 
          '50%': { borderColor: 'black' },
        },
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      Tourney : ['Tourney', 'sans-serif'],
      Mate : ['MateusBold',  'sans-serif' ],
      Nunito : ["Nunito Sans", 'sans-serif'] ,
      Space : ['Space Grotesk', 'sans-serif']
    },
  
  },
  plugins: [],
}
