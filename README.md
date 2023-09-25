# SvelteKit + Miniflare + Wrangler

This repo is an example of setting up SvelteKit with `miniflare` to simulate Cloudflare services such as KV Namespaces, D1 Databases, etc. during local development.

Meanwhile, it uses `wrangler` to simulate the Cloudflare worker environment when running `pnpm preview` after building the project.

## Alternatives

See https://github.com/sveltejs/kit/issues/4292#issuecomment-1550596497