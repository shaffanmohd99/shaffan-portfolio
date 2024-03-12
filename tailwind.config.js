/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-zodiac": {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bee5ff",
          300: "#92d6fe",
          400: "#5fbdfb",
          500: "#399ff8",
          600: "#2381ed",
          700: "#1b6ada",
          800: "#1d56b0",
          900: "#1d4b8b",
          950: "#112340",
        },
        aquamarine: {
          50: "#eefffa",
          100: "#c5fff0",
          200: "#8bffe4",
          300: "#64ffda",
          400: "#14edc0",
          500: "#00d1a8",
          600: "#00a88b",
          700: "#008570",
          800: "#056a5b",
          900: "#0a574c",
          950: "#003530",
        },
        colorText: "#ccd6f6",
        lightColorText: "rgba(204, 214, 246, 0.55)", 
      },
    },
  },
  plugins: [],
};
