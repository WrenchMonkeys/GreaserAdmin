import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals?.user
	};
};
