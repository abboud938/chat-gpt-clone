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
        "gradient" : "linear-gradient(to bottom , #fdf3ec, #e16517 )"
      },
      colors : {
        "primaryColor" : "#1f1f23" ,
        "secondaryColor" : "#e16517",
        "textColor" : "#fdf3ec"
      },
      utilities : {
        ".scrollbar-hide" : { 
          "scrollbar-width" : "none",
          "&::-webkit-scrollbar":{
            display : "none",
          }
        }
      }
    },
  },
  plugins: [],
};
