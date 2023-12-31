
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      darkRed: "#800d0d",
      red:"#DD0000",
      lightRed: "#ff0000",
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      black:'black',
      orange:'#FFA500'
    },
    extend: {},
  },
  plugins: [],
});
