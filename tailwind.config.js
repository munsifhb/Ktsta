/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      sm: '300px',
      md: '768px',
      lg: '900px',
      xl: '1440px',
    },


    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.07em',
      widest: '.1em',
      widest: '.25rem',
    },
    extend: {
 




      animation: {
        kido: "kido 2s ease-in-out forwards",
      },
  
      keyframes: {
        
        kido: {

          "50%":{opacity: 0},
          "100%":{
            transform: "rotatex(-360deg)",
        },

      },

      

        

      },


      

      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }


      
      
    }
    


  },

    

    extend: {

      
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
        '100px': '500rem'
      },
      padding: {
        '5px': '5px',
      },
      margin: {
        '5px': '5px',
        '10px': '10px',
      },
      space: {
        '5px': '5px',
      },
      
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
    },

    transitionDuration: {
      '2000': '2000ms',
    },

    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
    transitionDelay: {
      '2000': '2000ms',
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
   
    
    scale: {
      '175': '1.75',
    },
    rotate: {
      '17': '17deg',
    },
    spacing: {
      '4.25': '17rem',
    },
    translate: {
      '4.25': '17rem',
    },
    skew: {
      '17': '17deg',
    }
  },
  plugins: [],
}

