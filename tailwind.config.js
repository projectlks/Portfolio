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

        'slide-left': 'slideLeft 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
      },
      keyframes: {
        type: {
          '0%': { width: '0' }, 
          '100%': { width: '33ch' },
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
    screens: {
      'xs': '320px',
      '350' : '350px',   // Custom extra-small breakpoint
      'middle': '400px',
      'sm': '420px',
      '500' : '520px',   // Custom small breakpoint
      'md': '768px',   // Medium breakpoint
      'lg': '1024px',  // Large breakpoint
      'xl': '1280px',  // Extra-large breakpoint
      '2xl': '1600px', // 2xl breakpoint
    },

  
  },
  plugins: [],
}
