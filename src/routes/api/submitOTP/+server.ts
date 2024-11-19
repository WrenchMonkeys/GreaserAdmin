import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { error, json, redirect } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, fetch, cookies, locals }) => {
	const data = await request.json();

	const submitOTPResponse = await fetch(
		new URL('/api/authn/submit-otp-code', env.API_GATEWAY_URL),
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}
	);

	const responseBody = await submitOTPResponse.json();

	if (!submitOTPResponse.ok) {
		throw error(submitOTPResponse?.status, responseBody.message);
	}

	const { token, account: user } = responseBody;

	cookies.set('token', token, {
		httpOnly: true,
		maxAge: 15 * 60,
		path: '/'
	});

	// throw redirect(302, '/admin');

	return json({ token, user }, { status: 200 });
};
