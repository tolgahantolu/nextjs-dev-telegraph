/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-black": "#181818",
        "main-background": "#0f0e17",
        "main-color": "#a7a9be",
        "headline-color": "#fffffe",
        "highlight-background": "#ff8906",

        "secondary-color": "#f25f4c",
      },
      fontFamily: {
        patua: ["Patua One", "cursive"],
      },
    },
  },
  plugins: [],
};
