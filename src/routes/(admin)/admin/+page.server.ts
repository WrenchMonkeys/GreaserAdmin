import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const sanitationResponse = await fetch(new URL('/', API_GATEWAY_URL), {
		headers: new Headers({
			'User-Agent': locals.userAgent
		})
	});

	if (!sanitationResponse.ok) {
		throw error(sanitationResponse.status ?? 500, sanitationResponse.statusText);
	}

	return {
		user: locals?.user
	};
};
