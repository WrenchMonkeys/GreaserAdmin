import { sequence } from '@sveltejs/kit/hooks';
import type { Handle, RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { API_GATEWAY_URL } from '$env/static/private';

const authorizationHandler: Handle = async ({ event, resolve }): Promise<Response> => {
	const token = event.cookies.get('token');
	if (/\/admin(?:\/(?!login|submitOTP)\w+)?$/gm.test(event.url.pathname)) {
		console.log(`user is not authorized to access ${event.url.pathname}`);

		if (token == null) {
			throw redirect(302, '/admin/login');
		}

		const userResponse = await fetch(new URL('/api/authn/', API_GATEWAY_URL), {
			headers: new Headers({
				Authorization: `Bearer ${token}`
			})
		});

		if (!userResponse.ok) {
			throw redirect(302, '/admin/login');
		}

		const user = await userResponse.json();
		event.locals.user = user;
	}
	const response = await resolve(event);

	return response;
};

export const getSession = async (event: RequestEvent) => {
	const { token } = event.locals as Partial<{ token: string }>;
	if (!token) return {};
	return { token };
};

export const handle: Handle = sequence(authorizationHandler);
