import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/(app)/blog/$types';
import type { Post } from '$lib/models/post';
import { error, json } from '@sveltejs/kit';
import type { CityDetail } from '$lib/models/cityDetails';
import { isCityDetail } from '$lib/utils';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('api/cities');

	if (!response.ok) {
		throw error(500, 'failed to fetch cities.');
	}

	const cityDetails = await response.json();

	const operatingCities = Object.keys(cityDetails).map((key) => {
		return {
			cities: Object.values(cityDetails[key])
				.filter(isCityDetail)
				.map((cityDetail: CityDetail) => cityDetail.name),
			state: key[0].toUpperCase() + key.slice(1)
		};
	});

	console.log(operatingCities);

	return { operatingCities };
};
