import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, cookies, params }) => {
	const { applicationId } = params;

	return {
		applicationId
	};
};
