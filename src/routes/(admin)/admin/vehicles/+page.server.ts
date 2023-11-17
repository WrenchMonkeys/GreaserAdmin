import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const vehiclesResponse = await fetch(new URL('/api/vehicle/api/vehicle/', API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress(),
			'Content-Type': 'application/json'
		})
	});

	const yearsRequest = await fetch(new URL('/api/vehicle/api/vehicle/year', API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress(),
			'Content-Type': 'application/json'
		})
	});
	return {
		streamed: {
			vehicles: vehiclesResponse.json(),
			years: yearsRequest.json()
		}
	};
};
