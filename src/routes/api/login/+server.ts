import type { RequestHandler } from './$types';
import { error, json, redirect } from '@sveltejs/kit';

// import { AUTH_URL } from '$env/static/private';
import type { LoginPayload } from '$lib/models/login/loginPayload';

export const POST: RequestHandler = async ({ request, url, locals }) => {
	const { phoneNumber, rememberMe }: LoginPayload = await request.json();

	// const resp = await initiatePasswordlessLogin(phoneNumber, locals.userAgent);
	//
	// if (!resp.ok) {
	// 	throw error(resp?.status, resp.statusText);
	// }

	return json(
		{ message: `successfully submitted token request for ${phoneNumber}` },
		{ status: 200 }
	);
};

// const getUsernameAvailability = async (phoneNumber: string) =>
// 	fetch(new URL(`/accounts/available?username=${phoneNumber}`, AUTH_URL), {
// 		headers: {
// 			Origin: 'http://localhost'
// 		}
// 	});

// const registerAccount = (phoneNumber: string, password: string) =>
// 	fetch(new URL('/accounts', AUTH_URL), {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			username: phoneNumber,
// 			password
// 		}),
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Origin: 'http://localhost'
// 		}
// 	});

// const initiatePasswordlessLogin = (phoneNumber: string, userAgent: string) =>
// 	fetch(new URL(`/session/token?username=${encodeURIComponent(phoneNumber)}`, AUTH_URL), {
// 		headers: {
// 			Origin: 'http://localhost',
// 			'User-Agent': userAgent
// 		}
// 	});
