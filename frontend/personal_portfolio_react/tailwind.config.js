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
        subtitle: "#828fb1",
        one: "#217BFE",
        two: "#078EFB",
        three: "#A190FF",
        four: "#BD99FE",
        five: "#BE6EAE",
        charcoal: "#212121",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"] 
      },
    },
  },
  plugins: [],
}

