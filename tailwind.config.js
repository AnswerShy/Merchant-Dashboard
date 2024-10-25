/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(339.02deg, #0D3251 0%, #19476C 103.05%)',
      },
    },
  },
  plugins: [],
}

