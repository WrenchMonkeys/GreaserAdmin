import type { RequestHandler } from './$types';
import { json, redirect } from '@sveltejs/kit';
import type { LoginPayload } from '../../../models/login/loginPayload';

export const POST: RequestHandler = async ({ request, url, locals }): Promise<Response> => {
	const { email, rememberMe }: LoginPayload = await request.json();

	console.log(email);
	console.log(rememberMe);

	return json({});
};
