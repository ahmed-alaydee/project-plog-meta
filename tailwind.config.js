/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.{html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "var(--body-bg)",
        primary: "var(--text-color-01)",
      },
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    textOpacity: false,
    ringOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    placeholderOpacity: false,
  },
};
