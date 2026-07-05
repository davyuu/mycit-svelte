<script lang="ts">
	import StaticPage from '$lib/components/StaticPage.svelte'
	import { strings, themes } from '$lib/data/content'
</script>

<StaticPage header={strings.eventsHeader} title={strings.eventsHeader} description="View the latest Church in Toronto announcements." color={themes.events}>
	<a class="action-link" href="https://churchintoronto.org/fetch-announce/view" target="_blank" rel="noreferrer">Open Announcements</a>
</StaticPage>
