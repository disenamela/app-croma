const colors = require('tailwindcss/colors');

module.exports = {
	important: true,
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	corePlugins: {
		container: false,
	},
	theme: {
		boxShadow: {
			sm: '0 1px 2px 0 rgba(69, 47, 175, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(69, 47, 175, 0.1), 0 1px 2px 0 rgba(69, 47, 175, 0.06)',
			md: '0 4px 9px -1px rgba(69, 47, 175, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(69, 47, 175, 0.1), 0 4px 6px -2px rgba(69, 47, 175, 0.05)',
			xl: '0 20px 25px -5px rgba(69, 47, 175, 0.1), 0 10px 10px -5px rgba(69, 47, 175, 0.04)',
			'2xl': '0 25px 50px -12px rgba(69, 47, 175, 0.25)',
			'3xl': '0 35px 60px -15px rgba(69, 47, 175, 0.3)',
			inner: 'inset 0 2px 4px 0 rgba(69, 47, 175, 0.06)',
			none: 'none',
		},
		fontSize: {
			'xs': ['.75rem', '1rem'],
			'sm': ['.875rem', '1rem'],
			'base': ['1rem', '1.5rem'],
			'lg': ['1.125rem', '1.2em'],
			'xl': ['1.25rem', '1.4rem'],
			'2xl': ['1.5rem', '1.2em'],
			'3xl': ['1.875rem', '1.2em'],
			'4xl': ['2.25rem', '1em'],
			'5xl': ['3rem', '1em'],
			'6xl': ['4rem', '1em'],
			'7xl': ['5rem', '1em'],
		},
		extend: {
			colors: {
				main: {
					'50':  '#f3f4fa',
					'100': '#eae7fb',
					'200': '#d8c9fa',
					'300': '#c6aaf9',
					'400': '#b57efa',
					'500': '#9d61ff',
					'600': '#8b35f7',
					'700': '#6d2be8',
					'800': '#5525c4',
					'900': '#45209f',
				},
				gray: colors.blueGray,
				red: colors.rose,
				blue: colors.lightBlue,
				yellow: colors.amber,
			},
			spacing: {
				'n2': '-1rem',
				'n1': '-.5rem',
				'0': '0',
				'1': '.25rem',
				'2': '.5rem',
				'3': '1rem',
				'4': '1.5rem',
				'5': '2rem',
				'6': '2.5rem',
				'7': '3rem',
				'8': '3.5rem',
				'9': '4rem',
			}
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
		},
	},
	plugins: [],
}

