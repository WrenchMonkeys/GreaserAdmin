import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { CityDetails } from '$lib/models/cityDetails';

// todo: make this an actual api
export const GET: RequestHandler = ({ params }) => {
	const { state, city } = params;

	const cityDetails: CityDetails = {
		oklahoma: {
			'oklahoma-city': {
				name: 'Oklahoma City',
				state: 'Oklahoma',
				area: 100,
				lat: '35.46713139803142',
				long: '-97.51641715154447',
				operationStartDate: '2020-03-15',
				activePartners: 1,
				averageResponseTime: '30 minutes'
			},
			tulsa: {
				name: 'Tulsa',
				state: 'Oklahoma',
				lat: '36.15098489736459',
				long: '-95.98843029338072',
				area: 100,
				operationStartDate: '2020-06-01',
				activePartners: 1,
				averageResponseTime: '35 minutes'
			}
		},
		nevada: {
			'las-vegas': {
				name: 'Las Vegas',
				state: 'Nevada',
				lat: '36.17430449224278',
				long: '-115.15484529348839',
				area: 100,
				operationStartDate: '2021-01-10',
				activePartners: 1,
				averageResponseTime: '25 minutes'
			},
			mesquite: {
				name: 'Mesquite',
				state: 'Nevada',
				lat: '36.80397921495777',
				long: '-114.07540728518919',
				area: 50,
				operationStartDate: '2021-03-01',
				activePartners: 2,
				averageResponseTime: '40 minutes'
			}
		}
	};

	const details = cityDetails[state.toLowerCase().trim()]?.[city.toLowerCase().trim()];

	if (details) {
		return json(details);
	}

	return new Response('City not found', { status: 404 });
};
