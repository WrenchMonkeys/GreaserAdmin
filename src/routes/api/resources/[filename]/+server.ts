import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

export const GET: RequestHandler = async ({ params, fetch, locals, url, cookies }) => {
	try {
		const { filename } = params;

		const __filename = fileURLToPath(import.meta.url);
		const projectRoot = join(dirname(__filename), '../../../../../');
		const filePath = join(projectRoot, 'static', 'resources', filename);
		const file = await readFile(filePath);

		return new Response(file);
	} catch (e) {
		console.error(e);

		if (e instanceof Error) {
			throw error(500, e.message);
		} else {
			throw error(500, 'Unknown error');
		}
	}
};
