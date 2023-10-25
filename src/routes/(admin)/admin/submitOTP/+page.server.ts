import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes/(admin)/admin/submitOTP/$types';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals?.user
	};
};
