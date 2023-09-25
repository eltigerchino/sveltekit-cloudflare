<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData}*/
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<h1>{data.title}</h1>

<form method="post" use:enhance>
	<label for="title">New title:</label>
	<input type="text" name="title" id="title" />
	<button>Save</button>
</form>
