import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { API_GATEWAY_URL } from '$env/static/private';

// we do want to ensure that the user token is valid on every protected route
// call /api/authn/ to get the user from api and add to locals, do not store.
const authenticationHandler: Handle = async ({ event, resolve }) => {
	if (/\/admin(?:\/(?!login|submitOTP)[\w-]+)?$/gm.test(event.url.pathname)) {
		const token = event.cookies.get('token');
		console.log({ token });
		const userResponse = await fetch(new URL('/api/authn/', API_GATEWAY_URL), {
			headers: new Headers({
				Authorization: `Bearer ${token}`
			})
		});

		if (!userResponse.ok) {
			console.log(`user is not authorized to access ${event.url.pathname}`);
			throw redirect(302, '/admin/login');
		}

		const user = await userResponse.json();
		console.log(user);
		event.locals.user = user;
		event.locals.token = token;
	}

	return resolve(event);
};

const authorizationHandler: Handle = async ({ event, resolve }): Promise<Response> => {
	if (
		event.url.pathname.includes('admin/submitOTP') &&
		!event.url.searchParams.get('phoneNumber')
	) {
		console.log(`Phone number was not provided ${event.url.pathname}`);

		throw redirect(302, '/admin/login');
	}

	if (/\/admin(?:\/(?!login|submitOTP)\w+)?$/gm.test(event.url.pathname)) {
		if (event.locals.token == null) {
			console.log(`user is not authorized to access ${event.url.pathname}`);
			throw redirect(302, '/admin/login');
		}
	}

	const response = await resolve(event);

	return response;
};

export const handle: Handle = sequence(authenticationHandler, authorizationHandler);
