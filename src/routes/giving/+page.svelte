<script lang="ts">
	import StaticPage from '$lib/components/StaticPage.svelte'
	import { strings, themes } from '$lib/data/content'
</script>

<StaticPage header={strings.givingHeader} title={strings.givingTitle} description={strings.givingDescription} color={themes.giving}>
	<p>You can give online through Church Center.</p>
	<a class="action-link" href="https://churchintoronto.churchcenter.com/giving" target="_blank" rel="noreferrer">Give Online</a>
</StaticPage>
