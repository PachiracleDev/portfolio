/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary:
					"#67ff43",
				secondary:
					"#90ffff",

				dark: "#1a1a1a",
				dark2:
					"#1e293b",
			},
		},
	},
	plugins: [],
};
