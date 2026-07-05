<script lang="ts">
	import FormShell from '$lib/components/FormShell.svelte'
	import SignupForm from '$lib/components/forms/SignupForm.svelte'
	import { strings, themes, volunteerOptions } from '$lib/data/content'
</script>

<FormShell header={strings.volunteerHeader} title={strings.volunteerTitle} description={strings.volunteerDescription} color={themes.volunteer}>
	<SignupForm type="volunteer" color={themes.volunteer} options={volunteerOptions} submitLabel="Join A Team" />
</FormShell>
