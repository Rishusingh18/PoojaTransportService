/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./service.html",
    "./contact.html",
    "./admin.html",
    "./cities/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#f8f9ff",
        "surface-dim": "#cbdbf5",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dce9ff",
        "surface-container-highest": "#d3e4fe",
        "surface-variant": "#d3e4fe",
        "on-background": "#0b1c30",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#45464d",
        "outline": "#76777d",
        "outline-variant": "#c6c6cd",
        "primary": "#0b1c30",
        "on-primary": "#ffffff",
        "primary-container": "#131b2e",
        "on-primary-container": "#7c839b",
        "secondary": "#6e5e00",
        "on-secondary": "#ffffff",
        "secondary-container": "#f8df71",
        "on-secondary-container": "#736200",
        "tertiary-container": "#00174b",
        "on-tertiary-container": "#497cff"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      maxWidth: {
        "container-max": "1280px"
      },
      spacing: {
        "margin-desktop": "64px",
        "margin-mobile": "24px",
        "gutter": "32px"
      }
    }
  },
  plugins: []
};
