<script lang="ts">
	import { onMount } from 'svelte';

	let value: string = $state('');

	onMount(() => {
		document.getElementById('date')?.addEventListener('uk-input-date:change', (e) => {
			// @ts-ignore
			value = e.detail.value;
		});
	});
</script>

<div class="uk-container mt-20 grid grid-cols-2 gap-4">
	<div>
		<div class="uk-h3">Form</div>
		<div class="mt-4">
			<uk-input-date id="date"></uk-input-date>
		</div>
	</div>
	<div>
		<div class="uk-h3">Result</div>
		{#if value}
			The date is: {value}
		{/if}
	</div>
</div>