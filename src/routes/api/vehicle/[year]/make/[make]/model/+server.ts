import type { RequestHandler } from './$types.js';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch, url, cookies, params }) => {
	try {
		const result = await fetch(
			new URL(
				`/api/vehicle/api/vehicle/year/${params.year}/make/${params.make}/model/`,
				env.API_GATEWAY_URL
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
