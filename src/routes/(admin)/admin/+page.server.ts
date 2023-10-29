import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	console.log('admin locals: ', locals);
	return {
		user: locals?.user
	};
};
