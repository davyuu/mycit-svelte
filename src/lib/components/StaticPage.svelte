<script lang="ts">
	import PageHeader from './PageHeader.svelte'
	import TitleSection from './TitleSection.svelte'

	export let header: string
	export let title = header
	export let description = ''
	export let color = '#5938d9'
</script>

<PageHeader {title} {color} />
<div class="page-wrapper">
	<TitleSection title={title} {description} />
	<div class="content"><slot /></div>
</div>

<style lang="scss">
	.page-wrapper {
		max-width: 720px;
		margin: 0 auto;
		width: 100%;
	}

	.content {
		padding: 0 24px 36px;
		font-size: 16px;
		line-height: 1.6;
		color: #374151;
	}

	:global(.action-link) {
		display: inline-block;
		margin-top: 16px;
		font-weight: 700;
		color: white;
		background: #5938d9;
		padding: 12px 16px;
		border-radius: 4px;
		text-decoration: none;
	}
</style>
