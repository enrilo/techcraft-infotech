/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#152238",
        ink2: "#1c2c47",
        slate: "#3e4a61",
        slatesoft: "#6b7688",
        paper: "#edefea",
        paper2: "#e2e5dd",
        graphite: "#1b1f27",
        brass: "#b8863b",
        brassdark: "#93692c",
      },
      fontFamily: {
        serif: ["IBM Plex Serif", "Georgia", "serif"],
        sans: [
          "IBM Plex Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        shell: "1120px",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(237,239,234,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(237,239,234,0.22) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
