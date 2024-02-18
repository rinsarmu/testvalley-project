/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        "moon-dance": ["Moon Dance", "cursive", "sans-serif"],
        poppins: "Poppins",
        kaushan: "Kaushan Script",
        openSans: ["Open sans", "Montserrat", "sans-serif"],
        nunito: "Nunito,  Open sans",
      },
    },
  },
  plugins: [],
};
