<script lang="ts">
	export let color = '#5938d9'
	export let loading = false
	export let label = 'Submit'
</script>

<button type="submit" disabled={loading} style={`background-color: ${color}`}>
	{#if loading}
		Sending...
	{:else}
		{label}
	{/if}
</button>

<style lang="scss">
	button {
		width: 100%;
		border: 0;
		border-radius: 3px;
		padding: 14px 18px;
		color: white;
		font-size: 16px;
		font-weight: 700;
		cursor: pointer;
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	button:hover:not(:disabled) {
		transform: translateY(-1px);
	}

	button:disabled {
		cursor: progress;
		opacity: 0.7;
	}
</style>
