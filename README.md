# SvelteKit + Miniflare + Wrangler

This repo is an example of setting up SvelteKit with `miniflare` to simulate Cloudflare services such as KV Namespaces, D1 Databases, etc. during local development.

Meanwhile, it uses `wrangler` to simulate the Cloudflare worker environment when running `pnpm preview` after building the project.

See https://developers.cloudflare.com/workers/wrangler/commands/#pages for a full list of `wrangler pages` commands.

## Alternatives

See https://github.com/sveltejs/kit/issues/4292#issuecomment-1550596497

## Shortcomings

This example does not work in a StackBlitz environment because `miniflare` cannot run there.

Furthermore, `wrangler pages dev` only works locally as of now. Hence, there is no official method of connecting to non-local namespace bindings. See https://github.com/chientrm/wrangler-proxy for a possible alternative.
