<script>
	import Home from '$lib/components/Home/Home.svelte'
	import welcome from '$lib/images/svelte-welcome.webp'
	import welcome_fallback from '$lib/images/svelte-welcome.png'
</script>

<svelte:head>
	<title>Mycit</title>
	<meta name="Mycit Bulletin" content="Mycit Bulletin" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Home />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			display: block;
		}
	}
</style>
