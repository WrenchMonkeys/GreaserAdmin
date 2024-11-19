import type { PageServerLoad } from './$types';
// import { API_GATEWAY_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	try {
		return {};
	} catch (error) {
		return { error: 'Failed to connect to the authentication server.' };
	}
};
