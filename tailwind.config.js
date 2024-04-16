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

