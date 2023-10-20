import type { RequestHandler } from './$types';
import { getRandomValues } from 'crypto';
import { error, json, redirect } from '@sveltejs/kit';

import { AUTH_URL } from '$env/static/private';
import type { LoginPayload } from '$lib/models/login/loginPayload';
import { unwrapNullable } from '$lib/utils';
import { goto } from '$app/navigation';

export const POST: RequestHandler = async ({ request, url, locals }) => {
	const { phoneNumber, rememberMe }: LoginPayload = await request.json();

	const usernameAvailabilityResp = await getUsernameAvailability(phoneNumber);

	if (usernameAvailabilityResp.ok) {
		const password = getRandomValues(new Uint32Array(10)).join('');
		const registerResponse = await registerAccount(phoneNumber, password);

		if (!registerResponse.ok) {
			const registerError = await registerResponse.json();
			throw error(500, registerError.error);
		}
	}

	const resp = await initiatePasswordlessLogin(phoneNumber);

	if (!resp.ok) {
		throw error(resp?.status, resp.statusText);
	}

	return json(
		{ message: `successfully submitted token request for ${phoneNumber}` },
		{ status: 200 }
	);
};

const getUsernameAvailability = async (phoneNumber: string) =>
	fetch(new URL(`/accounts/available?username=${phoneNumber}`, AUTH_URL), {
		headers: {
			Origin: 'http://localhost',
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0'
		}
	});

const registerAccount = (phoneNumber: string, password: string) =>
	fetch(new URL('/accounts', AUTH_URL), {
		method: 'POST',
		body: JSON.stringify({
			username: phoneNumber,
			password
		}),
		headers: {
			'Content-Type': 'application/json',
			Origin: 'http://localhost',
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0'
		}
	});

const initiatePasswordlessLogin = (phoneNumber: string) =>
	fetch(new URL(`/session/token?username=${phoneNumber}`, AUTH_URL), {
		headers: {
			Origin: 'http://localhost',
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0'
		}
	});
