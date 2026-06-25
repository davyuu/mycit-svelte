<script lang="ts">
	import FormShell from '$lib/components/FormShell.svelte'
	import SignupForm from '$lib/components/forms/SignupForm.svelte'
	import { alphaOptions, strings, themes } from '$lib/data/content'
</script>

<FormShell header={strings.alphaHeader} title={strings.alphaHeader} description="Have questions about life, faith, or Christianity? Sign up and we will help you get connected with Alpha." color={themes.alpha}>
	<SignupForm type="alpha" color={themes.alpha} options={alphaOptions} submitLabel="Sign Up" />
</FormShell>
