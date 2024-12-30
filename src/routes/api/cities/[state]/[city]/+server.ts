import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// todo: make this an actual api
export const GET: RequestHandler = ({ params }) => {
	const { state, city } = params;

	const cityDetails: {
		[state: string]: {
			[city: string]: {};
		};
	} = {
		oklahoma: {
			'oklahoma-city': {
				name: 'Oklahoma City',
				state: 'Oklahoma',
				population: 681054,
				area: 621,
				operationStartDate: '2020-03-15',
				activePartners: 150,
				averageResponseTime: '30 minutes'
			},
			tulsa: {
				name: 'Tulsa',
				state: 'Oklahoma',
				population: 401190,
				area: 201,
				operationStartDate: '2020-06-01',
				activePartners: 85,
				averageResponseTime: '35 minutes'
			}
		},
		nevada: {
			'las-vegas': {
				name: 'Las Vegas',
				state: 'Nevada',
				population: 651319,
				area: 136,
				operationStartDate: '2021-01-10',
				activePartners: 200,
				averageResponseTime: '25 minutes'
			},
			mesquite: {
				name: 'Mesquite',
				state: 'Nevada',
				population: 20029,
				area: 32,
				operationStartDate: '2021-03-01',
				activePartners: 25,
				averageResponseTime: '40 minutes'
			}
		}
	};

	const details = cityDetails[state]?.[city];

	if (details) {
		return json(details);
	}

	return new Response('City not found', { status: 404 });
};
