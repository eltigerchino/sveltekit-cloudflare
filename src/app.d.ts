/// <reference types="@sveltejs/adapter-cloudflare" />
/// <reference types="@cloudflare/workers-types" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env: {
				// Remember to configure `src/lib/dev/miniflare.js` too
				YOUR_KV_NAMESPACE: KVNamespace;
			};
		}
	}
}

export {};
