module.exports = {
  corePlugins: {
    tableLayout: false,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'skyblue': "#00B6EF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
