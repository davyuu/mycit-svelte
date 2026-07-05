<script lang="ts">
	import PageHeader from './PageHeader.svelte'
	import TitleSection from './TitleSection.svelte'

	export let header: string
	export let title: string
	export let description = ''
	export let color = '#5938d9'
</script>

<PageHeader title={header} {color} />
<div class="page-wrapper">
	<TitleSection {title} {description} />
	<slot />
</div>

<style lang="scss">
	.page-wrapper {
		max-width: 720px;
		margin: 0 auto;
		width: 100%;
	}

	:global(form) {
		padding: 8px 24px 36px;
	}

	:global(label) {
		display: block;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		color: #374151;
		margin: 16px 0 8px;
	}

	:global(input),
	:global(select),
	:global(textarea) {
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #d1d5db;
		border-radius: 4px;
		padding: 12px;
		font-size: 16px;
		background: white;
		color: #111827;
	}

	:global(textarea) {
		min-height: 130px;
		resize: vertical;
	}

	:global(.row) {
		display: flex;
		gap: 12px;
	}

	:global(.row > *) {
		flex: 1;
	}

	:global(.checkbox) {
		align-items: center;
		gap: 10px;
		margin: 18px 0;
	}

	:global(.checkbox input) {
		width: auto;
		min-width: 18px;
		height: 18px;
	}

	:global(.checkbox label) {
		margin: 0;
		text-transform: none;
		letter-spacing: 0;
		font-size: 15px;
		font-weight: 500;
	}

	:global(.status) {
		margin: 12px 24px 0;
		padding: 12px 14px;
		border-radius: 4px;
		font-weight: 600;
	}

	:global(.status.error) {
		background: #fee2e2;
		color: #991b1b;
	}

	:global(.status.success) {
		background: #dcfce7;
		color: #166534;
	}

	@media (max-width: 520px) {
		:global(.row) {
			flex-direction: column;
			gap: 0;
		}
	}
</style>
