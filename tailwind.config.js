/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        raleway: "var(--font-raleway)",
        sora: "var(--font-sora)",
      },
    },
  },
  plugins: [],
};
