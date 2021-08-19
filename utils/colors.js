import chroma from 'chroma-js'

export const getContrastText = (
	color,
	lightText = '#fff',
	darkText = '#000'
) => {
	return chroma(color).luminance() > 0.5 ? darkText : lightText
}

const generateChromaGradient = (color) => {
	// Calc color luminance
	const realColorLuminance = (1 - chroma(color).luminance()) * 10
	
	// Round color position
	let roundedColorLuminance = realColorLuminance;
	if (realColorLuminance >= 6.5 && realColorLuminance < 9.5) {
		roundedColorLuminance = realColorLuminance - 2;
		if (roundedColorLuminance > 4.25 && roundedColorLuminance < 6) {
			roundedColorLuminance = 5;
		}
	}
	roundedColorLuminance = Math.round(roundedColorLuminance) * 100; // from 0 to 1000

	if (roundedColorLuminance === 0) {
		roundedColorLuminance = 50
	}
	if (roundedColorLuminance === 1000) {
		roundedColorLuminance = 950
	}

	// console.log(Math.round(realColorLuminance));

	return chroma
		.scale(['white', color, 'black'])
		.mode('lrgb')
		.domain([0, roundedColorLuminance, 1000])
}

export const createRangeColor = (color) => {
	let gradient = null
	try {
		gradient = generateChromaGradient(color)
	} catch (e) {
		gradient = generateChromaGradient('#ffffff')
	}
	// console.log(gradient(5).hex());
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
		900: gradient(950).hex()
	}
}