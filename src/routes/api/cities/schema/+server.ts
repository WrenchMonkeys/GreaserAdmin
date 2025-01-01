import type { RequestHandler } from '../../../../../.svelte-kit/types/src/routes/api/cities/$types';
import { error, json } from '@sveltejs/kit';
import { isCityDetail } from '$lib/utils';

export const GET: RequestHandler = async ({ params, fetch }) => {
	const resp = await fetch('/api/cities');

	if (!resp.ok) {
		throw error(500, 'Failed to fetch cities.');
	}

	const cityDetails = await resp.json();

	return json({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'MobileGreaser',
		url: 'https://mobilegreaser.com/cities',
		areaServed: Object.keys(cityDetails)?.map((state) => ({
			'@type': 'State',
			name: state,
			containsPlace: Object.values(cityDetails[state])
				.filter(isCityDetail)
				.map((cityDetail) => ({
					'@type': 'City',
					name: cityDetail.name
				}))
		}))
	});
};
