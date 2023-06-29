/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#274472", //Dark Blue
        seconday: "#41729F", //Midnight Blue
        tarid: "#5885AF", //Blue Gray
        fourth: "#C3E0E5", //Baby Blue
      },
    },
  },
  plugins: [],
}
