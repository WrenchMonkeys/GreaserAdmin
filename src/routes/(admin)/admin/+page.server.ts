import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, cookies }) => {
	return {
		user: locals?.user
	};
};
