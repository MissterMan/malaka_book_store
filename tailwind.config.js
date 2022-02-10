module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-hero": "url('../img/bg-hero.svg')",
      },
      fontFamily: {
        dmsans: ['"DM Sans"', "sans-serif"],
        "sans-pro": ["source-sans-pro", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00BAC7",
        dark: "#272D3E",
        "dark-muted": "#272D3E",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        floating: "floating 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
