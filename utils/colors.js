import chroma from 'chroma-js'

export const getContrastText = (
	color,
	lightText = 'white',
	darkText = 'black'
) => {
	return chroma(color).luminance() > 0.5 ? darkText : lightText
}

const generateChromaGradient = (color) => {
	// Calc color luminance
	const realColorLuminance = chroma(color).luminance() * 1000
	// Round color position
	const roundedColorLuminance = Math.round(realColorLuminance)

	return chroma
		.scale(['white', color, 'black'])
		.domain([0, roundedColorLuminance, 1000])
}

export const createRangeColor = (color) => {
	let gradient = null
	try {
		gradient = generateChromaGradient(color)
	} catch (e) {
		gradient = generateChromaGradient('#ffffff')
	}
	return {
		default: color,
		50: gradient(50).hex(),
		100: gradient(100).hex(),
		200: gradient(200).hex(),
		300: gradient(300).hex(),
		400: gradient(400).hex(),
		500: gradient(500).hex(),
		600: gradient(600).hex(),
		700: gradient(700).hex(),
		800: gradient(800).hex(),
		900: gradient(900).hex()
	}
}