<script lang="ts">
	import { homeSections } from '$lib/data/content'
</script>

<svelte:head>
	<title>MyCIT</title>
	<meta name="description" content="Church in Toronto information hub" />
</svelte:head>

<div class="home">
	<div class="hero">
		<div class="banner">CIT</div>
		<h1>Church in Toronto</h1>
	</div>

	<nav class="content" aria-label="MyCIT sections">
		{#each homeSections as section}
			<a class="section" href={section.route} target={section.external ? '_blank' : undefined} rel={section.external ? 'noreferrer' : undefined}>
				<span class="icon" aria-hidden="true">{section.icon}</span>
				<span>{section.title}</span>
			</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.home {
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
		background: white;
		min-height: 100vh;
	}

	.hero {
		position: relative;
		padding: 32px 24px 26px;
		text-align: center;
		background: linear-gradient(135deg, #5938d9, #4a275d);
		color: white;
	}

	.banner {
		width: 86px;
		height: 86px;
		border: 3px solid rgb(255 255 255 / 80%);
		border-radius: 999px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
		font-weight: 800;
		letter-spacing: 0.08em;
		margin-bottom: 14px;
	}

	h1 {
		font-size: 24px;
		margin: 0;
		font-weight: 700;
	}

	.content {
		padding: 0 16px 24px;
	}

	.section {
		height: 5.5em;
		display: flex;
		align-items: center;
		text-decoration: none;
		border-bottom: 1px solid #ececf1;
		color: #111827;
	}

	.icon {
		width: 40px;
		height: 40px;
		margin: 1em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 30px;
		color: #5938d9;
	}

	.section span:last-child {
		font-size: 1.52em;
		font-weight: 700;
	}
</style>
