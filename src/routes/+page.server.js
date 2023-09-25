const KEY = 'title';

/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
	const kv = platform?.env?.YOUR_KV_NAMESPACE;

	return {
		title: await kv?.get(KEY) || "No title"
	};
}

export const actions = {
	default: async ({ request, platform }) => {
		const formData = await request.formData();

		const title = formData.get('title')?.toString();

		if (!title) {
			await platform?.env.YOUR_KV_NAMESPACE.delete(KEY);
			return;
		}

		await platform?.env.YOUR_KV_NAMESPACE.put(KEY, title);
	}
};
