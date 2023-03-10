/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./*.html'],
  theme: {
    extend: {
        colors: {
            clifford: '#da373d',
            bg: "#000000",
            buttonColor: '#1EB25E',
            textColor: "#fff",
            subTextColor: '#C9C9C9',
            serviceBoxBg: '#131313',
            footerColor: '#1EB25E',
            blogLinkColor: '#1EB25E'
        },
        screens: {
            'sm': '640px',

            'md': '768px',

            'lg': '1024px',

            'xl': '1280px',

            '2xl': '1536px',
        }
    }
},
  plugins: [],
}
