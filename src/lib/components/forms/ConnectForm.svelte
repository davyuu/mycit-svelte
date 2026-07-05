<script lang="ts">
	import { goto } from '$app/navigation'
	import SubmitButton from '$lib/components/SubmitButton.svelte'
	import { connectOptions, themes } from '$lib/data/content'
	import { submitForm } from '$lib/services/forms'

	let firstName = ''
	let lastName = ''
	let email = ''
	let phone = ''
	let description = ''
	let message = ''
	let subscribe = false
	let loading = false
	let status = ''
	let error = ''

	async function handleSubmit() {
		status = ''
		error = ''

		if (!firstName || !lastName) {
			error = 'Please enter your first and last name.'
			return
		}

		if (!email && !phone) {
			error = 'Please enter an email or phone number.'
			return
		}

		if (!description) {
			error = 'Please choose the option that best describes you.'
			return
		}

		loading = true
		try {
			await submitForm('connect', { firstName, lastName, email, phone, description, message, subscribe })
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
	<label>Name</label>
	<div class="row">
		<input type="text" name="firstName" autocomplete="given-name" placeholder="First name" bind:value={firstName} />
		<input type="text" name="lastName" autocomplete="family-name" placeholder="Last name" bind:value={lastName} />
	</div>

	<label>Email</label>
	<input type="email" name="email" autocomplete="email" placeholder="youremailaddress@example.com" bind:value={email} />

	<label>Phone</label>
	<input type="tel" name="phone" autocomplete="tel" placeholder="4161234567" bind:value={phone} />

	<label>Which best describes you?</label>
	<select name="description" bind:value={description}>
		<option value="" disabled>Choose one option</option>
		{#each connectOptions as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>

	<label>Message</label>
	<textarea name="message" placeholder="Add your message (optional)" bind:value={message} />

	<div class="row checkbox">
		<input type="checkbox" id="subscribe" bind:checked={subscribe} />
		<label for="subscribe">Keep me updated on CIT events</label>
	</div>

	<SubmitButton color={themes.connect} {loading} label="Get Connected" />
</form>
