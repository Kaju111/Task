/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateFade: {
          "0%": { opacity: "1", transform: "rotate(0)" },
          "50%": { opacity: "0.5", transform: "rotate(180deg)" },
          "100%": { opacity: "0", transform: "rotate(360deg)" },
        },
        slideDoors: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        rotateFade: "rotateFade 2s ease forwards",
        slideDoors: "slideDoors 2s ease forwards",
      },
    },
  },
  plugins: [],
};
