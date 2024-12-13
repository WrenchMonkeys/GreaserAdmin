module.exports = {
	content: ['./src/routes/**/*.{html,svelte,js,ts}'],
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: [
			{
				nord: {
					...require('daisyui/src/theming/themes')['nord'],
					secondary: '#8894a2'
				}
			},
			'dim'
		]
	}
};
