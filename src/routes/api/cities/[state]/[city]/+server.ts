import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// todo: make this an actual api
export const GET: RequestHandler = async ({ params, fetch }) => {
	const { state, city } = params;

	const resp = await fetch('/api/cities');

	if (!resp.ok) {
		throw error(500, 'failed to fetch cities');
	}

	const cityDetails = await resp.json();

	const details =
		cityDetails[state.toLowerCase().trim().replaceAll(' ', '-')]?.[
			city.toLowerCase().trim().replaceAll(' ', '-')
		];

	if (details) {
		return json(details);
	}

	return new Response('City not found', { status: 404 });
};
