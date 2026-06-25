<script lang="ts">
	export let title: string
	export let description = ''
</script>

<section class="title-section">
	<h2>{title}</h2>
	{#if description}
		<p>{description}</p>
	{/if}
</section>

<style lang="scss">
	.title-section {
		padding: 28px 24px 12px;
	}

	h2 {
		margin: 0 0 12px;
		font-size: 28px;
		line-height: 1.1;
		font-weight: 700;
		color: #111827;
	}

	p {
		margin: 0;
		font-size: 16px;
		line-height: 1.5;
		color: #4b5563;
	}
</style>
