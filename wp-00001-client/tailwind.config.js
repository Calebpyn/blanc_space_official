/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial-lm":
          "radial-gradient(circle at 50% 50%, #1E1E1E, #848484)",
      },
      colors: {
        "lm-bg": "#D9D9D9",
        "dm-bg": "#161616",
        "secondary-gray": "#ECECEC",
      },
      fontFamily: {
        gopherBold: ["gopherBold"],
        gopherRegular: ["gopherRegular"],
        hnLight: ["hnLight"],
        hnRoman: ["hnRoman"],
      },
      screens: {
        "contact-us-bp": "900px",
      },
    },
  },
  plugins: [],
};
