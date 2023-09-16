/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'grayer': '#181818',
        'blacker': '#0E0E0E',
        'Blue4': '#005A82',
        'Blue2': '#0AC8B9',
        'Orange1': '#F8C40C',
        'Orange2': '#FFB60D',
        'Valorant1': '#f94555',
        'Valorant2': '#f2636b',
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'Poppins': ['"Poppins"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}

