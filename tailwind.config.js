/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        form: "0px 5px 20px 0 rgba(108,117,139,0.2)"
      },
      screens: {
        xl: "1194px",
        md: "834px",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(339.02deg, #0D3251 0%, #19476C 103.05%)',
        'custom-bg': "url('./src/assets/bg.svg')",
        'password': "url('./src/assets/show.svg')",
        "google": "url('./src/assets/googleLogo.svg')"
      },
    },
  },
  plugins: [],
}

