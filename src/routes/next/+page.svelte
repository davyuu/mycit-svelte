<script lang="ts">
	import FormShell from '$lib/components/FormShell.svelte'
	import SignupForm from '$lib/components/forms/SignupForm.svelte'
	import { nextOptions, strings, themes } from '$lib/data/content'
</script>

<FormShell header={strings.nextHeader} title={strings.nextTitle} description={strings.nextDescription} color={themes.next}>
	<SignupForm type="next" color={themes.next} options={nextOptions} submitLabel="Take My Next Step" />
</FormShell>
