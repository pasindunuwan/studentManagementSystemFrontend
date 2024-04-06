/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
      width: {
        "10/13": "63.5%",
        34: "8.3rem",
        68: "17.5rem",
        18: "4.7rem",
        110: "60rem",
      },
      height: { sm: "33rem", 115: "30rem" },
    },
  },

  plugins: [],
};
