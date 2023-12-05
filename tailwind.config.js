/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        h1: {
          fontSize: "4rem",
          letterSpacing: "-2px",
          fontWeight: "700",
        },
        h2: {
          fontSize: "2.5rem",
          letterSpacing: "-2px",
          fontWeight: "700",
        },
        h3: {
          fontSize: "1.5rem",
          letterSpacing: "-2px",
          fontWeight: "700",
        },
        h4: {
          fontSize: "1.25rem",
          letterSpacing: "-1.5px",
          fontWeight: "700",
        },
        p1: {
          fontSize: "1.125rem",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
        p2: {
          fontSize: "1rem",
          fontWeight: "400",
        },
        p3: {
          fontSize: "0.875rem",
          fontWeight: "400",
        },
      },
      colors: {
        base_dark: "#080808",
        base_light: "#FEFEFE",
        black: "#000000",
        white: "#ffffff",
        base_gray: "#AAAAAA",

        gray_200: "#EDEDED",
        gray_300: "#E7E7E7",
        gray_500: "#C7C7C7",
        gray_700: "#9E9E9E",
        gray_900: "#333333",
        gray_1000: "#161616",

        primary: "#008DFF",
        primary_hover: "#0072CE",
        primary_ghost: "#CCE8FE",
        primary_ghost_text: "#72BFFC",

        secondary: "#0F55BD",
        secondary_hover: "#072A5E",
        secondary_ghost: "#B2CFF9",
        secondary_ghost_text: "#629DF2",

        sup_orange: "#D45900",
        sup_orange_hover: "#6A2C00",
        sup_purple: "#D349B5",
        sup_purple_hover: "#721B5F",
        sup_green: "#00C31F",
        sup_green_hover: "#00610F",
        sup_red: "#EE1D36",
        sup_red_hover: "#7C0917",
      },
      keyframes: {
        fadeInOverlay: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.75" },
        },
        fadeOutOverlay: {
          "0%": { opacity: "0.75" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in-overlay": "fadeInOverlay 0.2s ease-in-out forwards",
        "fade-out-overlay": "fadeOutOverlay 0.2s ease-in-out forwards",
        "fade-in": "fadeIn 0.2s ease-in-out forwards",
        "fade-out": "fadeOut 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
