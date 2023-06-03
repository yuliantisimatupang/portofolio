/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik']
    },
    extend: {
      colors: {
        "primary-1": "#fefcf3",
        "primary-2": "#f3f1e4",
        "line-dark": "#e6e3d1",
        "black-primary": "#1c1c16",
        "btn-primary": "#e6e4bf",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
};
