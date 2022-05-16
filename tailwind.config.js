module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
     display:['Oswald'],
     kalam:['Kalam']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
