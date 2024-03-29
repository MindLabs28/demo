/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "dodgerblue",
        secondary: "#3247FF",
        accent: "#F5FF1E",
        background: "#040708",
        font: "#EEF1F2",
      },
      backgroundImage: {
        "truck-wash":
          "url('https://github.com/pathikcomp/images/blob/main/bg.jpg?raw=true')",
      },
    },
  },
  plugins: [],
}
