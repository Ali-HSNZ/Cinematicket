/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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

