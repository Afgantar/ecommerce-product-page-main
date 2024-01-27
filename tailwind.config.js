/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
        tablet: '801px',
        mobile: '451px',
      },
      colors: {
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          pale_orange: 'hsl(25, 100%, 94%)',
          hover_orange: 'hsl(25.79,100%,77.65%)'
        },
        neutral: {
          very_dark_blue: 'hsl(220, 13%, 13%)',
          dark_grayish_blue: 'hsl(219, 9%, 45%)',
          grayish_blue: 'hsl(220, 14%, 75%)',
          light_grayish_blue: 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black: 'hsl(0, 0%, 0%)',
        }
      }
    },
  },
  plugins: [],
}

