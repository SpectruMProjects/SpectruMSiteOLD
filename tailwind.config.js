/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {},
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: false,
      defaultFlavour: "mocha",
    })
  ],
}
