import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const workOrdersResponse = await fetch(new URL('/api/work-order/all', env.API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress ? getClientAddress() : 'http://localhost',
			'Content-Type': 'application/json'
		})
	});

	if (!workOrdersResponse.ok) {
		throw error(workOrdersResponse.status, workOrdersResponse.statusText);
	}

	return {
		streamed: {
			workOrders: workOrdersResponse.json()
		}
	};
};
