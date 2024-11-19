import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const rolesResponse = await fetch(new URL('/api/authn/roles', env.API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress ? getClientAddress() : 'http://localhost',
			'Content-Type': 'application/json'
		})
	});

	return {
		roles: rolesResponse.json()
	};
};
