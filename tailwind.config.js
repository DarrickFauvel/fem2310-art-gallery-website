/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Big Shoulders Display"],
        body: ["Outfit"],
      },
      fontSize: {
        "clamp-h1": "clamp(3.75rem, 2.958rem + 3.38vw, 6rem)",
        "clamp-h2": "clamp(3.125rem, 2.905rem + 0.939vw, 3.75rem)",
      },
      backgroundColor: {
        "persian-orange": "#d5966c",
        night: "#151515",
        onyx: "#444444",
      },
      colors: {
        "persian-orange": "#d5966c",
      },
    },
  },
  plugins: [],
}
