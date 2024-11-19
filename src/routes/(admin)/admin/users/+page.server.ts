import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const usersResponse = await fetch(new URL('/api/authn/users', API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress ? getClientAddress() : 'http://localhost',
			'Content-Type': 'application/json'
		})
	});

	return {
		users: usersResponse.json()
	};
};
