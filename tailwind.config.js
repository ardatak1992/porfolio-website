/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        primary: {
          light: "#4731d2",
          dark: "#171042",
        },
        secondary: {
          light: "#cbf180",
          dark: "#19210a",
        },
        switchBg: {
          light: "#9088fb",
          dark: "#3a3a3a",
        },
        switchButton: {
          light: "#fbea72",
          dark: "#ffea71",
        },
        default: {
          light: "#ffffff",
          dark: "#242128",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
