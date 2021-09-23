// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: {
          primary: "#ff9e5a",
          text: "#FFF",
          background: "#3d3e42",
        },
      },
      backgroundImage: (theme) => ({
        "profile-image": "url('/Profile.jpg')",
      }),
      height: (theme) => ({
        navbar: "80px",
      }),
      marginTop: (theme) => ({
        "navbar-offset": "-80px",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
