/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f379a7",

          "secondary": "#a2c8f2",

          "accent": "#898dff",

          "neutral": "#241F29",

          "base-100": "#E0E1F0",

          "info": "#6FD5EB",

          "success": "#13582F",

          "warning": "#EDA540",

          "error": "#FD5E83",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}