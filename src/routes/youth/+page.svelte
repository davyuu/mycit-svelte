<script lang="ts">
	import StaticPage from '$lib/components/StaticPage.svelte'
	import { strings, themes } from '$lib/data/content'
</script>

<StaticPage header={strings.youthHeader} title={strings.youthHeader} description="Stay connected with CITYouth." color={themes.youth}>
	<a class="action-link" href="https://instagram.com/cityouth_?utm_medium=copy_link" target="_blank" rel="noreferrer">Open Instagram</a>
</StaticPage>
