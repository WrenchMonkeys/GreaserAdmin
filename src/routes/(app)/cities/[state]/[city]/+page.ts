import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface CityData {
	state: string;
	cities: string[];
}

const operatingCities: CityData[] = [
	{ state: 'oklahoma', cities: ['oklahoma-city', 'tulsa'] },
	{ state: 'nevada', cities: ['las-vegas', 'mesquite', 'henderson', 'laughlin'] }
];

export const load: PageLoad = ({ params }) => {
	const { state, city } = params;

	const stateData = operatingCities.find((s) => s.state === state.toLowerCase());
	if (!stateData) {
		throw error(404, 'State not found');
	}

	if (!stateData.cities.includes(city.toLowerCase())) {
		throw error(404, 'City not found');
	}

	const formattedCity = city
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

	const formattedState = state.charAt(0).toUpperCase() + state.slice(1);

	return {
		city: formattedCity,
		state: formattedState,
		serviceArea: {
			radius: '50 miles',
			response: '30 minutes',
			availability: '24/7'
		}
	};
};
