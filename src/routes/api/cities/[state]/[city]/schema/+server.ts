import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type { CityDetail } from '$lib/models/cityDetails';

export const GET: RequestHandler = async ({ params, fetch }) => {
	const { state, city } = params;

	const response = await fetch(`/api/cities/${state}/${city}`);

	if (!response.ok) {
		return new Response('City not found', { status: 404 });
	}

	const details = await response.json();

	if (isCityDetails(details)) {
		return json({
			'@context': 'https://schema.org',
			'@type': 'AutoRepair',
			name: `MobileGreaser Mobile Mechanic - ${details.name}, ${details.state}`,
			'@id': `https://mobilegreaser.com/cities/${state}/${city}`,
			url: `https://mobilegreaser.com/cities/${state}/${city}`,
			address: {
				'@type': 'PostalAddress',
				addressLocality: details.name,
				addressRegion: details.state,
				addressCountry: 'US'
			},
			geo: {
				'@type': 'GeoCircle',
				geoMidpoint: {
					'@type': 'GeoCoordinates',
					latitude: details.lat,
					longitude: details.long
				},
				geoRadius: details.area
			},
			openingHoursSpecification: {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				opens: '00:00',
				closes: '23:59'
			}
		});
	}

	return new Response('City not found', { status: 404 });
};

const isCityDetails = (data: unknown): data is CityDetail =>
	(data as CityDetail)?.name != null && (data as CityDetail)?.state != null;
