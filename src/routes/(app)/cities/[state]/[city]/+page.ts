import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const { state, city } = params;

	const response = await fetch(`/api/cities/${state}/${city}`);
	if (!response.ok) {
		throw error(404, 'City not found');
	}

	return response.json();
};
