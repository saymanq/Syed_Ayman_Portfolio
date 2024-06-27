/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'slide1_bg_img': "url('./src/assets/home_bg_img.jpg')",
      },
      colors: {
        primary: "#00040f",
        secondary: "#060606",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

