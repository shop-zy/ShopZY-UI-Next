/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your project structure
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				secondary: "#F5F5F5",
				secondary1: "#FEFAF1",
				secondary2: "#DB4444",
				"text-primary": "#FAFAFA",
				"text-secondary": "#7D8184",
				"text-black": "#000000",
				"btn-black": "#000000",
				"btn-green": "#00FF66",
				"btn-primary": "#DB4444",
				"hover-btn-primary": "#E07575",
				"hover-btn-secondary": "#A0BCE0",
			},
		},
	},
	plugins: [],
};
