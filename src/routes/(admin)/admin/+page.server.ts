import type { PageServerLoad } from './$types';
// import env from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals?.user
	};
};
