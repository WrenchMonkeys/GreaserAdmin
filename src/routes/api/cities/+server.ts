import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type { CityDetails } from '$lib/models/cityDetails';

const cityDetails: CityDetails = {
	oklahoma: {
		'oklahoma-city': {
			name: 'Oklahoma City',
			state: 'Oklahoma',
			area: 100,
			lat: '35.46713139803142',
			long: '-97.51641715154447',
			operationStartDate: '2020-03-15',
			geoRegion: 'US-OK',
			activePartners: 1,
			averageResponseTime: '30 minutes'
		},
		tulsa: {
			name: 'Tulsa',
			state: 'Oklahoma',
			lat: '36.15098489736459',
			long: '-95.98843029338072',
			area: 100,
			geoRegion: 'US-OK',
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
			geoRegion: 'US-NV',
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
			image: '/mesquite_nv.jpg',
			geoRegion: 'US-NV',
			operationStartDate: '2021-03-01',
			activePartners: 2,
			averageResponseTime: '40 minutes'
		},
		bunkerville: {
			name: 'Bunkerville',
			state: 'Nevada',
			lat: '36.77273452927768',
			long: '-114.12894760290921',
			area: 50,
			geoRegion: 'US-NV',
			operationStartDate: '2021-03-01',
			activePartners: 2,
			averageResponseTime: '40 minutes'
		},
		'sun-city, mesquite': {
			name: 'Sun City, Mesquite',
			state: 'Nevada',
			lat: '36.83306265524464',
			long: '-114.11253419007807',
			area: 50,
			image: '/sun_city_mesquite.jpeg',
			geoRegion: 'US-NV',
			operationStartDate: '2021-03-01',
			activePartners: 2,
			averageResponseTime: '40 minutes'
		},
		henderson: {
			name: 'Henderson',
			state: 'Nevada',
			lat: '36.83306265524464',
			long: '-114.11253419007807',
			area: 50,
			geoRegion: 'US-NV',
			operationStartDate: '2021-03-01',
			activePartners: 1,
			averageResponseTime: '40 minutes'
		},
		logandale: {
			name: 'Logandale',
			state: 'Nevada',
			lat: '36.59955342781023',
			long: '-114.48319114089331',
			area: 50,
			geoRegion: 'US-NV',
			operationStartDate: '2021-03-01',
			activePartners: 2,
			averageResponseTime: '40 minutes'
		},
		overton: {
			name: 'Overton',
			state: 'Nevada',
			lat: '36.54354993666659',
			long: '-114.44783887340188',
			area: 50,
			geoRegion: 'US-NV',
			operationStartDate: '2021-03-01',
			activePartners: 2,
			averageResponseTime: '40 minutes'
		},
		moapa: {
			name: 'Moapa',
			state: 'Nevada',
			lat: '36.69115386247003',
			long: '-114.59111594269477',
			area: 50,
			geoRegion: 'US-NV',
			operationStartDate: '2021-03-01',
			activePartners: 2,
			averageResponseTime: '40 minutes'
		}
	}
};

export const GET: RequestHandler = ({ params }) => {
	return json(cityDetails);
};
