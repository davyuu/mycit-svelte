<script lang="ts">
	import { goto } from '$app/navigation'
	import SubmitButton from '$lib/components/SubmitButton.svelte'
	import { themes } from '$lib/data/content'
	import { submitForm } from '$lib/services/forms'

	let fullName = ''
	let phone = ''
	let contact = false
	let prayer = ''
	let loading = false
	let status = ''
	let error = ''

	async function handleSubmit() {
		status = ''
		error = ''

		if (!prayer.trim()) {
			error = 'Please enter a prayer request.'
			return
		}

		loading = true
		try {
			await submitForm('prayer', { fullName, phone, contact, prayer })
			status = 'Successfully sent.'
			await goto('/')
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
	<h3>CONTACT INFO</h3>
	<label>Name (optional)</label>
	<input type="text" name="fullName" autocomplete="name" placeholder="Full name" bind:value={fullName} />

	<label>Phone (optional)</label>
	<input type="tel" name="phone" autocomplete="tel" placeholder="4161234567" bind:value={phone} />

	<div class="row checkbox">
		<input type="checkbox" id="follow-up" bind:checked={contact} />
		<label for="follow-up">Please follow up with me</label>
	</div>

	<div class="prayer-wrapper">
		<label>How can we pray for you?</label>
		<textarea name="prayer" placeholder="Add your prayer request" bind:value={prayer} />
		<p class="disclaimer">
			Privacy: All prayer requests will only be shared with individuals on the prayer team and/or the church leadership team.
		</p>
	</div>

	<SubmitButton color={themes.prayer} {loading} label="Submit Prayer Request" />
</form>

<style lang="scss">
	h3 {
		font-size: 14px;
		letter-spacing: 0.08em;
		color: #6b7280;
		margin: 8px 0 0;
	}

	.disclaimer {
		font-size: 13px;
		line-height: 1.45;
		color: #6b7280;
		margin: 8px 0 20px;
	}
</style>
