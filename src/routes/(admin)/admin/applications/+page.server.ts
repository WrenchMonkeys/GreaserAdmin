import type { PageServerLoad } from './$types';
import { createClient, type PostgrestResponse, type SupabaseClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';
import type { ApplicationListItem } from '$lib/models/application';
import { building } from '$app/environment';

let supabase: SupabaseClient;

if (!building) {
	supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_KEY);
}

export const load: PageServerLoad = async () => {
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
