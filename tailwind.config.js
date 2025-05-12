// File: tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#f2aa21",
        primary: "#000000",
        secondary: "#ffffff",
        gray: {
          300: "#e0e0e0",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
        },
        success: "#4CAF50",
        error: "#F44336",
      },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        18: "4.5rem",
        26: "6.5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
