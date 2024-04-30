/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          to: { width: '9ch'}
        },
        blink: {
          '0%, 100%': { borderColor: 'currentColor' },
          '50%': { borderColor: 'transparent' }
        }
      },
      animation: {
        typing: 'typing 3s steps(9) forwards, blink 0.2s step-end infinite alternate',
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

