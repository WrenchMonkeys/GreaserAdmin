import type {
	PageServerLoad,
	RequestEvent,
	Action
} from '../../../../../.svelte-kit/types/src/routes/(admin)/admin/submitOTP/$types';
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';
import { goto } from '$app/navigation';
import { redirect, json, error } from '@sveltejs/kit';
import { unwrapNullable } from '$lib/utils';
const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_KEY);

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals?.user
	};
};

export const actions: Record<string, Action> = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const phone = form.get('phone') ?? '';
		const token = form.get('otpCode') ?? '';

		if (phone instanceof File || token instanceof File) {
			throw error(400, 'Invalid request');
		}

		const { data, error: otpError } = await supabase.auth.verifyOtp({ phone, token, type: 'sms' });

		if (otpError !== null) {
			console.error(otpError);
			throw error(Number(otpError.code) ?? 400, 'Failed to verify OTP');
		} else {
			const { session } = data;

			if (session == null) {
				throw error(400, 'Failed to verify OTP');
			}
			const { access_token } = session;
			cookies.set('token', unwrapNullable(access_token), {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.ENV === 'production',
				maxAge: 60 * 60 * 24 * 7
			});
			throw redirect(302, '/admin');
		}
	}
};
