module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      hangerBK: "#16161A",
      hangerLT: "#242629",
      white: "#FFFFFE",
      sub: "#94A1B2",
      secondary: "#72757E",
      accent: "#2CB67D",
      highlight: "#7F5AF0",
      danger: "#F76343",
      hazy: "#7A90B8",
      contrail: "#C8E9CB",
    },
    extend: {},
  },
  variants: {},
  plugins: [require("windicss/plugin/forms")],
};
