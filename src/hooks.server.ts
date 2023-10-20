import { sequence } from '@sveltejs/kit/hooks';
import type { Handle, HandleServerError } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

const authenticationHandler: Handle = async ({ event, resolve }): Promise<Response> => {
	const response = await resolve(event);
	if (event.request.url.includes('/api/submitOTP') && response.ok) {
		const data = await response.json();
		event.locals.token = data?.token;
		event.locals.user = data?.user;
	}

	return response;
};

const authorizationHandler: Handle = async ({ event, resolve }): Promise<Response> => {
	if (
		/\/admin\/(?:(?!login|submitOTP)\w+)?$/gm.test(event.url.pathname) &&
		event.locals?.user == null
	) {
		console.log(`user is not authorized to access ${event.url.pathname}`);
		throw redirect(302, '/admin/login');
	}

	return resolve(event);
};

export const handle: Handle = sequence(authenticationHandler, authorizationHandler);
