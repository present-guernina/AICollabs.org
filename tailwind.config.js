module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#003328",
        "primary-dark": "#00271f",
        accent: "#000000",
        light: "#F9F9F9",
        gold: "#FFD700"
      },
      fontFamily: { base: ["Aptos", "Arial", "Helvetica", "sans-serif"] }
    }
  },
  plugins: []
};
