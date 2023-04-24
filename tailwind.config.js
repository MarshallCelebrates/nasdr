/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        one: "url('/src/img/background.jpeg')",
      },
      animation: {
        jump: "jump 1s",
        pingo: "pings 3s infinite",
        spin: "spins 3s 1 forwards ",
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15%)" },
        },
        pings: {
          "0%, 100%": { background: "#EF0020" },
          "50%": { background: "#BA0019" },
        },
        spins: {
          "0%": { transform: "rotate(0deg)" },

          "100%": { transform: "rotate(1840deg)" },
        },
      },
    },
  },
  plugins: [],
};
