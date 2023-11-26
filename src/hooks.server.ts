import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { API_GATEWAY_URL } from '$env/static/private';
import { unwrapNullable } from '$lib/utils';

// we do want to ensure that the user token is valid on every protected route
// call /api/authn/ to get the user from api and add to locals, do not store.
const authenticationHandler: Handle = async ({ event, resolve }) => {
	event.locals.userAgent = unwrapNullable(event.request.headers.get('user-agent'));
	if (/\/admin(?:\/(?!login|submitOTP)[\w-]+)?$/gm.test(event.url.pathname)) {
		const token = event.cookies.get('token');
		const userResponse = await fetch(new URL('/api/authn/', API_GATEWAY_URL), {
			headers: new Headers({
				Authorization: `Bearer ${token}`
			})
		});

		if (!userResponse.ok) {
			console.log(`user is not authorized to access ${event.url.pathname}`);
			throw redirect(302, '/admin/login');
		}

		event.locals.user = await userResponse.json();
		event.locals.token = token;
	}

	return resolve(event);
};

const authorizationHandler: Handle = async ({ event, resolve }): Promise<Response> => {
	if (
		event.url.pathname.includes('admin/submitOTP') &&
		!event.url.searchParams.get('phoneNumber')
	) {
		throw redirect(302, '/admin/login');
	}

	if (/\/admin(?:\/(?!login|submitOTP)[\w-]+)?$/gm.test(event.url.pathname)) {
		if (event.locals.token == null) {
			throw redirect(302, '/admin/login');
		}
	}

	const response = await resolve(event);

	return response;
};

export const handle: Handle = sequence(authenticationHandler, authorizationHandler);
