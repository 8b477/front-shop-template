/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#1E2334",
        subtitle: "#956DFF",
        secondary: "#383E99",
        textPrimary: "#DCD9F7",
        textSecondary: "#FFF3D7",
        button: "#756FFF",
        card: "#2C3049",
      },
    },
  },
  plugins: [],
};
