import { Miniflare, Log, LogLevel } from 'miniflare';

// See https://latest.miniflare.dev/
// for further configuration

/** @type {import('miniflare').MiniflareOptions} */
const opts = {
	log: new Log(LogLevel.WARN),
	modules: true,
	script: `
	export default {
		fetch () {
			return new Response(null, { status: 404 });
		}
	}
	`,
	// These namespaces should also be added to
	// `app.d.ts` `App.Platform.env` and `wrangler.toml`
	kvNamespaces: ['YOUR_KV_NAMESPACE'],
	kvPersist: './.mf/kv'
	// r2Buckets: [],
	// r2Persist: './.mf/r2'
	// durableObjects: {
	// 	object1: {
	// 		className: '',
	// 		scriptName: ''
	// 	}
	// },
	// durableObjectsPersist: './mf/do',
	// d1Databases: [],
	// d1Persist: './mf/d1',
};

/**
 * @returns {Promise<App.Platform>}
 */
export async function getPlatform() {
	const mf = new Miniflare(opts);

	/** @type {App.Platform} */
	const platform = {
		env: await mf.getBindings()
	};

	return platform;
}
