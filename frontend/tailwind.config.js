/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      colors: {
        navy: {
          900: "#0B0F19",
          800: "#111827",
        },
        neon: {
          cyan: "#00E5FF",
          blue: "#007BFF",
        }
      }
    },
  },
  plugins: [],
}
