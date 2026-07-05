<script lang="ts">
	import FormShell from '$lib/components/FormShell.svelte'
	import ConnectForm from '$lib/components/forms/ConnectForm.svelte'
	import { strings, themes } from '$lib/data/content'
</script>

<FormShell header={strings.connectHeader} title={strings.connectTitle} description={strings.connectDescription} color={themes.connect}>
	<ConnectForm />
</FormShell>
