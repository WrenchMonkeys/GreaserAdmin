import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const statusResponse = await fetch(new URL('/', API_GATEWAY_URL), {
		headers: new Headers({
			Origin: getClientAddress(),
			'Content-Type': 'application/json',
			'User-Agent': locals.userAgent
		})
	});

	if (!statusResponse.ok) {
		throw error(statusResponse.status ?? 500, statusResponse.statusText);
	}

	return {};
};
