/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        main : "#000000",
        second : "#636363"
      },
      fontFamily : {
        'iranyekan-thin' : ['iranyekan-thin'],
        'iranyekan-light' : ['iranyekan-light'],
        'iranyekan-regular' : ['iranyekan-regular'],
        'iranyekan-medium' : ['iranyekan-medium'],
        'iranyekan-bold' : ['iranyekan-bold'],
        'iranyekan-extraBold' : ['iranyekan-extraBold'],
        'iranyekan-black' : ['iranyekan-black'],
        'iranyekan-extraBlack' : ['iranyekan-extraBlack'],
      }
    },
  },
  plugins: [],
}

