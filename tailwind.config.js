// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        rounded: "0 30px 75px -12px rgba(0, 0, 0, 0.6)",
      },
      colors: {
        portfolio: {
          primary: "var(--portfolio-primary)",
          text: "var(--portfolio-text)",
          background: "var(--portfolio-background)",
        },
      },
      backgroundImage: (theme) => ({
        "profile-image": "url('/Profile.jpg')",
      }),
      height: (theme) => ({
        navbar: "100px",
        125: "500px",
      }),
      marginTop: (theme) => ({
        "-navbar": "-80px",
        navbar: "80px",
      }),
      width: (theme) => ({
        125: "500px",
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
