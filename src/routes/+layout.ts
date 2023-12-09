import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_HOST, PUBLIC_POSTHOG_API_KEY } from '$env/static/public';

export const load = async () => {
	if (browser) {
		posthog.init(PUBLIC_POSTHOG_API_KEY, {
			api_host: PUBLIC_POSTHOG_HOST,
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
