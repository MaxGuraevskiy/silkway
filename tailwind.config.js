/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        verysmallscreen: "350px",
        mobile: "37.5em",
        small: "56.25em",
        medium: "75em",
        large: "112.5em",

        tel: "600px",
        wide: "1000px",
      },
      fontFamily: {
        sans_pro: ["var(--font-sans-pro)"],
        manrope: ["var(--font-monrape)"],
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        bg: "#ffffff",
        darkBg: "#191919",
        color: "#000000",
        darkColor: "#ffffff",
        customRed: "#c32d2f",
        customDarkRed: "#7a2b30",
      },
    },
  },
  plugins: [],
};
