/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode using a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Fixed typo here
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}
