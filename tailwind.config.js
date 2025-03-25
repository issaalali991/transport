/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./aPP.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-primeui")],
};
