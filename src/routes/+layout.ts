import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

export const load = async () => {
	if (browser) {
		posthog.init(env.PUBLIC_POSTHOG_API_KEY, {
			api_host: env.PUBLIC_POSTHOG_HOST,
			loaded: () => {
				console.log('posthog loaded');
			},
			debug: true,
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	return;
};
