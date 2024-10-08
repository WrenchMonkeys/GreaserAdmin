import type { PageServerLoad } from './$types';
import { createClient, type PostgrestResponse } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';
import type { ApplicationListItem } from '$lib/models/application';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const { data: applications, error }: PostgrestResponse<ApplicationListItem> = await supabase
		.from('technician_application')
		.select('id, status, is_backgroundcheck_concented, is_terms_and_conditions_accepted')
		.order('created_at', { ascending: false });

	if (error) {
		return {
			status: error.code,
			error: error.message
		};
	}

	console.log({ applications });

	return {
		applications
	};
};
