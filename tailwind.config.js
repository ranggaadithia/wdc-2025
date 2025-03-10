/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}",
    "./*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        "primary-dark": "#16a34a"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({
        nocompatible: true,
        preferredStrategy: 'pseudoelements',
    }),
],
};
