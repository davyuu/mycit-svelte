<script lang="ts">
	import { goto } from '$app/navigation'
	import SubmitButton from '$lib/components/SubmitButton.svelte'
	import { submitForm } from '$lib/services/forms'

	export let type: string
	export let color: string
	export let submitLabel = 'Submit'
	export let options: { value: string; label: string }[] = []
	export let showParents = false
	export let showKids = false

	let firstName = ''
	let lastName = ''
	let fullName = ''
	let parentsName = ''
	let kidsName = ''
	let email = ''
	let phone = ''
	let description = ''
	let message = ''
	let loading = false
	let status = ''
	let error = ''

	async function handleSubmit() {
		status = ''
		error = ''

		const hasName = fullName.trim() || (firstName.trim() && lastName.trim())
		if (!hasName) {
			error = 'Please enter your name.'
			return
		}

		if (!email && !phone) {
			error = 'Please enter an email or phone number.'
			return
		}

		if (options.length && !description) {
			error = 'Please choose one option.'
			return
		}

		loading = true
		try {
			await submitForm(type, {
				firstName,
				lastName,
				fullName: fullName || `${firstName} ${lastName}`.trim(),
				parentsName,
				kidsName,
				email,
				phone,
				description,
				message
			})
			status = 'Successfully sent.'
			await goto('/confirm')
		} catch (err) {
			error = err instanceof Error ? err.message : 'An error occurred.'
		} finally {
			loading = false
		}
	}
</script>

{#if error}<div class="status error">{error}</div>{/if}
{#if status}<div class="status success">{status}</div>{/if}

<form autocomplete="on" on:submit|preventDefault={handleSubmit}>
	{#if showParents || showKids}
		<label>Parent name</label>
		<input type="text" name="parentsName" autocomplete="name" placeholder="Parent name" bind:value={parentsName} />

		<label>Child name</label>
		<input type="text" name="kidsName" placeholder="Child name" bind:value={kidsName} />
	{:else}
		<label>Name</label>
		<div class="row">
			<input type="text" name="firstName" autocomplete="given-name" placeholder="First name" bind:value={firstName} />
			<input type="text" name="lastName" autocomplete="family-name" placeholder="Last name" bind:value={lastName} />
		</div>
	{/if}

	<label>Email</label>
	<input type="email" name="email" autocomplete="email" placeholder="youremailaddress@example.com" bind:value={email} />

	<label>Phone</label>
	<input type="tel" name="phone" autocomplete="tel" placeholder="4161234567" bind:value={phone} />

	{#if options.length}
		<label>Which best describes you?</label>
		<select name="description" bind:value={description}>
			<option value="" disabled>Choose one option</option>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
	{/if}

	<label>Message</label>
	<textarea name="message" placeholder="Add your message (optional)" bind:value={message} />

	<SubmitButton {color} {loading} label={submitLabel} />
</form>
