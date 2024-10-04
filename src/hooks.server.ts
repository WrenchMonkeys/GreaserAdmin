import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { API_GATEWAY_URL } from '$env/static/private';
import { unwrapNullable } from '$lib/utils';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

// we do want to ensure that the user token is valid on every protected route
// call /api/authn/ to get the user from api and add to locals, do not store.

const authorizationHandler: Handle = async ({ event, resolve }): Promise<Response> => {
	const token = event.cookies.get('token');
	if (/\/admin(?:\/(?!login|submitOTP)[\w-]+)?$/gm.test(event.url.pathname)) {
		if (token == null) {
			throw redirect(302, '/admin/login');
		}

		const {
			data: { user }
		} = await supabase.auth.getUser(token);

		if (user == null) {
			throw redirect(302, '/admin/login');
		}

		event.locals.user = user;
		event.locals.token = token;
	}

	const response = await resolve(event);

	return response;
};

export const handle: Handle = sequence(authorizationHandler);
