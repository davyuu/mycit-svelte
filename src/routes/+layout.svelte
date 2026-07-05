<script lang="ts">
	import './styles.scss'
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		min-height: 100vh;
		background: #f5f5f7;
	}

	main {
		min-height: 100vh;
	}
</style>
