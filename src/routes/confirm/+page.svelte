<script lang="ts">
	import StaticPage from '$lib/components/StaticPage.svelte'
	import { strings, themes } from '$lib/data/content'
</script>

<StaticPage header={strings.confirmTitle} title={strings.confirmTitle} description={strings.confirmDescription} color={themes.connect}>
	<a class="action-link" href="/">Back Home</a>
</StaticPage>
