import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const vehiclesResponse = await fetch(new URL('/api/vehicle/api/vehicle/', API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress(),
			'Content-Type': 'application/json'
		})
	});

	if (!vehiclesResponse.ok) {
		throw error(vehiclesResponse.status ?? 500, vehiclesResponse.statusText);
	}

	const yearsRequest = await fetch(new URL('/api/vehicle/api/vehicle/year', API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress(),
			'Content-Type': 'application/json'
		})
	});

	if (!yearsRequest.ok) {
		throw error(yearsRequest.status ?? 500, yearsRequest.statusText);
	}

	return {
		streamed: {
			vehicles: vehiclesResponse.json(),
			years: yearsRequest.json()
		}
	};
};
