import type { RequestHandler } from './$types.js';
import { error, json } from '@sveltejs/kit';
import { API_GATEWAY_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch, locals, url, cookies }) => {
	const page = url.searchParams.get('page');
	const size = url.searchParams.get('size');
	const year = url.searchParams.get('year');
	const make = url.searchParams.get('make');
	const model = url.searchParams.get('model');
	const trim = url.searchParams.get('trim');

	try {
		const result = await fetch(
			new URL(
				`/api/vehicle/api/vehicle?year=${year}&make=${make}&model=${model}&trim=${trim}&page=${page}&size=${size}`,
				API_GATEWAY_URL
			),
			{
				method: 'GET',
				headers: new Headers({
					Authorization: `Bearer ${cookies.get('token')}`,
					'Content-Type': 'application/json'
				})
			}
		);

		if (!result.ok) throw new Error(result.statusText);

		const vehicles = await result.json();
		return json(vehicles);
	} catch (e) {
		console.error(e);

		if (e instanceof Error) {
			throw error(500, e.message);
		} else {
			throw error(500, 'Unknown error');
		}
	}
};
