/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fill: (theme) => ({
        'white': theme('colors.white'),
        'black': theme('colors.black')
      }),
      fontSize: {
        'xl-custom':['1.25rem', '1rem']
      },
      fontFamily: {
        'serif': ['ui-serif', 'DejaVu Serif', 'Liberation Serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
      },
      boxSizing: {
        inherit: 'inherit',
      },
      width: {
        '100': '25rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '190': '48rem',
        '210': '54rem',
      },
      keyframes: {
        typing: {
          from: { width: '0'},
          to: { width: '8ch'}
        },
        blink: {
          '0%, 100%': { borderColor: 'white' },
          '50%': { borderColor: 'transparent' }
        },
      },
      animation: {
        typing: 'typing 1s steps(8) forwards, blink 0.2s step-end infinite alternate',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.box-inherit': {
          boxSizing: 'inherit',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    }
  ],
}

