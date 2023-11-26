import type { PageServerLoad } from './$types';
import { API_GATEWAY_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, getClientAddress }) => {
	const workOrdersResponse = await fetch(new URL('/api/work-order/all', API_GATEWAY_URL), {
		headers: new Headers({
			Authorization: `Bearer ${locals.token}`,
			Origin: getClientAddress(),
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
