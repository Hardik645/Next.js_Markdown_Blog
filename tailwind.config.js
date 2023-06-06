// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deer': '#ae8054',
        'deer500': '#c3a180',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
