<script lang="ts">
	export let title: string
	export let color = '#5938d9'
	export let backHref = '/'
</script>

<header class="header-bar" style={`background-color: ${color}`}>
	<a class="back" href={backHref} aria-label="Back to home">‹</a>
	<div class="center">
		<h1>{title}</h1>
	</div>
	<div class="right" />
</header>

<style lang="scss">
	.header-bar {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 48px;
		color: white;
		box-shadow: 0 1px 4px rgb(0 0 0 / 14%);
	}

	.back,
	.right {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-decoration: none;
		font-size: 40px;
		line-height: 1;
		font-weight: 300;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 0;
	}

	h1 {
		font-size: 20px;
		font-weight: 600;
		margin: 0;
		color: white;
	}
</style>
