/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'grayer': '#181818',
        'blacker': '#0E0E0E',
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'Poppins': ['"Poppins"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}

