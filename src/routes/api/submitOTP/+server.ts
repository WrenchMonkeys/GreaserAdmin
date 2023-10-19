import type { RequestHandler } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const data = await request.json();

	const submitOTPResponse = await fetch(new URL('/api/authn/submit-otp-code', API_GATEWAY_URL), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	const responseBody = await submitOTPResponse.json();

	if (!submitOTPResponse.ok) {
		throw error(submitOTPResponse?.status, responseBody.message);
	}

	const {
		result: { id_token }
	} = responseBody;

	return json({ token: id_token });
};
