LyoqIEB0eXBlIHtpbXBvcnQoJ3RhaWx3aW5kY3NzJykubG9hZENvbmZpZ30gKi8KbW9kdWxlLmV4cG9ydHMgPSB7CiAgY29udGVudDogWyIuL2luZGV4Lmh0bWwiXSwKICB0aGVtZToge30sCiAgcGx1Z2luczogW10sCn07Cg==/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	darkMode: 'class',
	theme: {
		extend: {
			
			fontFamily: {
				poly: ["'poly'", "serif"],
			},
		},
	},
	plugins: [
		function({ addVariant }) {
			addVariant('firefox', ':-moz-any(&)')
		}
	],
}
