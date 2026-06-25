<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte'
	import { strings, themes } from '$lib/data/content'

	export let data
	let search = ''
	$: filtered = data.schedules.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date))
	}
</script>

<PageHeader title={strings.statsHeader} color={themes.stats} />
<section class="stats">
	<p>{strings.statsDescription}</p>
	{#if data.error}
		<div class="status error">{data.error}</div>
	{:else}
		<input type="search" placeholder="Search a name..." bind:value={search} />
		<table>
			<thead>
				<tr><th>Volunteer Name</th><th>Declined 3</th><th>Declined 2</th><th>Declined 1</th></tr>
			</thead>
			<tbody>
				{#each filtered as person}
					<tr>
						<td>{person.name}</td>
						{#each person.dates as date}
							<td>{formatDate(date.updatedAt)}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</section>

<style lang="scss">
	.stats { max-width: 900px; margin: 0 auto; padding: 24px; background: white; min-height: calc(100vh - 48px); }
	input { width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 4px; margin: 16px 0; }
	table { width: 100%; border-collapse: collapse; }
	th, td { text-align: left; border-bottom: 1px solid #e5e7eb; padding: 10px; }
	th { font-size: 12px; text-transform: uppercase; color: #6b7280; }
	.status.error { background: #fee2e2; color: #991b1b; padding: 12px; border-radius: 4px; }
</style>
