// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C5A358",
          lightGold: "#E8D3A3",
          dark: "#1A1A1A",
          accent: "#E31E24",
        },
      },
      fontFamily: {
        sans: ["var(--font-futura)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
