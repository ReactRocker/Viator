module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      borderRadius: {
        '10': '10px',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        '12': '12px',
      },
    },
  },
  plugins: [],
}
