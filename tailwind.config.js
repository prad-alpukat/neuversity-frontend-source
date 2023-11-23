/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfdf8",
          100: "#d1faed",
          200: "#a7f3db",
          300: "#6ee7c1",
          400: "#34d3a2",
          500: "#10b985",
          600: "#059669",
          700: "#047854",
          800: "#065f43",
          900: "#064e38",
          950: "#022c1f",
        },
        secondary: "#595959",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
