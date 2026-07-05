<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte'
	import { strings, themes } from '$lib/data/content'
	import type { PageData } from './$types'

	export let data: PageData

	let currentMessageIndex = data.messages.findIndex((message) => new Date(message.date) < new Date())
	if (currentMessageIndex < 0) currentMessageIndex = 0

	let currentTab = 'message'
	$: message = data.messages[currentMessageIndex]

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en-CA', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(date))
	}

	function previous() {
		if (currentMessageIndex < data.messages.length - 1) currentMessageIndex += 1
	}

	function next() {
		if (currentMessageIndex > 0) currentMessageIndex -= 1
	}
</script>

<PageHeader title={strings.messageHeader} color={themes.message} />

{#if data.error}
	<div class="notice error">{data.error}</div>
{:else if message}
	<section class="message-page">
		<div class="nav-buttons">
			<button type="button" on:click={previous} disabled={currentMessageIndex >= data.messages.length - 1}>Older</button>
			<select bind:value={currentMessageIndex} aria-label="Select message week">
				{#each data.messages as item, index}
					<option value={index}>{formatDate(item.date)}</option>
				{/each}
			</select>
			<button type="button" on:click={next} disabled={currentMessageIndex <= 0}>Newer</button>
		</div>

		{#if message.seriesImage}
			<img class="series-image" src={message.seriesImage} alt={message.seriesName} />
		{/if}

		<div class="tabs">
			<button class:active={currentTab === 'message'} on:click={() => (currentTab = 'message')}>Message</button>
			{#if message.studyGuide}<button class:active={currentTab === 'study'} on:click={() => (currentTab = 'study')}>Study Guide</button>{/if}
			{#if message.groupMaterial}<button class:active={currentTab === 'group'} on:click={() => (currentTab = 'group')}>Group Material</button>{/if}
			{#if message.supplementaryMaterial}<button class:active={currentTab === 'supplement'} on:click={() => (currentTab = 'supplement')}>Supplement</button>{/if}
			{#if message.setList}<button class:active={currentTab === 'songs'} on:click={() => (currentTab = 'songs')}>Songs</button>{/if}
		</div>

		<div class="message-container">
			{#if currentTab === 'message'}
				<h1>{message.title}</h1>
				<p class="date">{formatDate(message.date)}</p>
				<p class="number">{message.messageNumber ? `#${message.messageNumber}` : ''}{message.messageChapter ? `: ${message.messageChapter}` : ''}</p>
				<div class="html">{@html message.outline}</div>
			{:else if currentTab === 'study'}
				<h1>Examining the text & our hearts:</h1>
				{#if message.studyChapter}<p class="number">Read: {message.studyChapter}</p>{/if}
				<div class="html">{@html message.studyGuide}</div>
			{:else if currentTab === 'group'}
				<h1>Community Group Material:</h1>
				<div class="html">{@html message.groupMaterial}</div>
			{:else if currentTab === 'supplement'}
				<div class="html">{@html message.supplementaryMaterial}</div>
			{:else if currentTab === 'songs'}
				<h1>This week's set list:</h1>
				<div class="html">{@html message.setList}</div>
			{/if}
		</div>
	</section>
{:else}
	<div class="notice">No messages found.</div>
{/if}

<style lang="scss">
	.message-page {
		max-width: 820px;
		margin: 0 auto;
		background: white;
		min-height: calc(100vh - 48px);
	}

	.nav-buttons {
		display: flex;
		gap: 8px;
		padding: 16px;
		align-items: center;
	}

	.nav-buttons select {
		flex: 1;
		padding: 10px;
	}

	button {
		border: 0;
		border-radius: 4px;
		padding: 10px 12px;
		font-weight: 700;
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.5;
		cursor: default;
	}

	.series-image {
		width: 100%;
		max-height: 320px;
		object-fit: cover;
		display: block;
	}

	.tabs {
		display: flex;
		overflow-x: auto;
		background: #f3f4f6;
	}

	.tabs button {
		border-radius: 0;
		background: transparent;
		white-space: nowrap;
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 0.04em;
		color: #4b5563;
	}

	.tabs button.active {
		background: white;
		color: #4a275d;
	}

	.message-container {
		padding: 24px;
	}

	h1 {
		font-size: 28px;
		line-height: 1.1;
		margin: 0 0 8px;
		color: #4a275d;
	}

	.date,
	.number {
		margin: 0 0 12px;
		color: #6b7280;
	}

	.html :global(img) {
		max-width: 100%;
		height: auto;
	}

	.notice {
		max-width: 720px;
		margin: 24px auto;
		padding: 16px;
		background: white;
		border-radius: 6px;
	}

	.notice.error {
		color: #991b1b;
		background: #fee2e2;
	}
</style>
