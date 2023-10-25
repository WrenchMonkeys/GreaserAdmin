import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes/(admin)/admin/$types';

export const load: PageServerLoad = ({ locals }) => {
	console.log('LOCALS', locals);
	return {
		user: locals?.user
	};
};
