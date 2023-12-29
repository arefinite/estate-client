/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			fontWeight: {
				'bold': 500,
				'semi-bold': 400,
			},
			fontFamily: {
				merri: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [],
}