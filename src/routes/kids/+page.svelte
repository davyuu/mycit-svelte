<script lang="ts">
	import FormShell from '$lib/components/FormShell.svelte'
	import SignupForm from '$lib/components/forms/SignupForm.svelte'
	import { strings, themes } from '$lib/data/content'
</script>

<FormShell header={strings.kidsHeader} title={strings.kidsHeader} description="Help us connect with your family and keep your child plugged into citKids." color={themes.kids}>
	<SignupForm type="kids" color={themes.kids} submitLabel="Submit" showParents showKids />
</FormShell>
