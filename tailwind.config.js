/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: "#95A0A7",
      blue: "#2A414F",
      blue40: "#1C2B35",
      blue70: "#0E161A",
      orange: "#FF9900",
      orange40: "#995C00",
      orange70: "#4C2E00",
      black: "#000000",
      white: "#FFFFFF" 
    }
  },
  plugins: [],
}
