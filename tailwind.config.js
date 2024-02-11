/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-palette": "#EEBA0B",
        "black-palette": "#131313",
        "silver-palette": "#92A5AE",
        "white-palette": "#EAEBED",
      },
    },
  },
  plugins: [],
};
