/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-black": "#1f1f1f",
        "main-background": "#0f0e17",
        "main-color": "#a7a9be",
        "headline-color": "#fffffe",
        "highlight-background": "#ff8906",

        "secondary-color": "#f25f4c",
        "tertiary-color": "#e53170",
        "stroke-color": "black",
      },
      fontFamily: {
        crimson: ["Crimson Text", "serif"],
      },
    },
  },
  plugins: [],
};
