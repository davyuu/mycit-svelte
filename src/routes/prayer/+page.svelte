<script lang="ts">
	import FormShell from '$lib/components/FormShell.svelte'
	import PrayerForm from '$lib/components/forms/PrayerForm.svelte'
	import { strings, themes } from '$lib/data/content'
</script>

<FormShell header={strings.prayerHeader} title={strings.prayerTitle} description={strings.prayerDescription} color={themes.prayer}>
	<PrayerForm />
</FormShell>
