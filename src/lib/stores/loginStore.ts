import { writable } from 'svelte/store';

export const loginStore = writable({
	phoneNumber: '',
	rememberMe: false
});
