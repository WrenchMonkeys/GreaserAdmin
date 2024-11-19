import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const vehiclesResponse = await fetch(new URL('/api/vehicle/api/vehicle/', env.API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress ? getClientAddress() : 'http://localhost',
			'Content-Type': 'application/json'
		})
	});

	if (!vehiclesResponse.ok) {
		throw error(vehiclesResponse.status ?? 500, vehiclesResponse.statusText);
	}

	const yearsRequest = await fetch(new URL('/api/vehicle/api/vehicle/year', env.API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress ? getClientAddress() : 'http://localhost',
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
