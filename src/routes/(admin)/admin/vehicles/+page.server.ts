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
	return {
		vehicles: vehiclesResponse.json()
	};
};
