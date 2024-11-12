/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
	  fontFamily: {
        'noto-sans-armenian': ['"Noto Sans Armenian"', 'sans-serif'],
		'inter': ['Inter', 'sans-serif'],
      },
	},
  },
  plugins: [],
}

