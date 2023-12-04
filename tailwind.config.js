/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        supernova: "#fac900" /* yellow / warning */,
        spicyMustard: "#6e5a0d" /* dark yellow */,
        bombay: "#aeaeae" /* light gray */,
        orangeRed: "#ff4600" /* red / error */,
        cognac: "#9a360e" /* dark red */,
        fireEngineRed: "#c52425" /* dark red */,
        silverTree: "#70bd91" /* light green */,
        turquoiseGreen: "#a0ccb7" /* very light green */,
        spanishGreen: "#008a52" /* medium green */,
        cruseo: "#0a5d2c" /* dark green */,
        countyGreen: "#003d19" /* darkest green */,
        acadia: "#392f2d" /* brown */,
        scotchMist: "#efe9cb" /* light brown */,
        nileBlue: "#243853" /* blue */,
        blackPearl: "#071126" /* navy blue */,
        pastelMagenta: "#ff9dbf" /* pink */,
        padua: "#b1e3cc" /* lightest green - placeholder color */,
        vistaBlue: "#94d1b4" /* light green - placeholder color */,
      },
    },
  },
  plugins: [],
};
