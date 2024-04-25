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

