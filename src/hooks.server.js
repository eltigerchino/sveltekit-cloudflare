import { dev } from '$app/environment';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (dev) {
		const { getPlatform } = await import('$lib/dev/miniflare');
		event.platform ??= await getPlatform();
	}

	const response = await resolve(event);
	return response;
}
