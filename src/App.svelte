<script>
	import Modal from "./Modal.svelte"
	export let artists;

	let showArtist = ""
</script>

<main>
	<h1>V.A.R 2022 </h1>

	<h2>A Propos</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod at sem id elementum. Morbi mattis, erat eget ullamcorper consectetur, ipsum ex vulputate sem, tristique suscipit sem arcu sed leo. Donec imperdiet mattis augue. Sed ipsum dui, laoreet vel sagittis et, hendrerit non ligula. Maecenas iaculis eros id urna sollicitudin,
	</p>
	<h2>Programmation</h2>
	<ul class="artists">
	{#each artists as artist}
		<li on:click={() => showArtist = artist} style="background-image:url({artist.imgUrl})">
			<h3>{artist.name}</h3> 
			<h4>{artist.nomination}</h4>
		</li>
	{/each}
	{#if showArtist}
	<Modal bind:showArtist={showArtist}>
	</Modal>
	{/if}
</ul>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;600&family=Space+Grotesk:wght@300&display=swap');

	main {
		width: 60vw;
		font-family: 'Inter', sans-serif;
		color: white;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		font-size: 6em;
		color: black;
		text-transform: uppercase;
		font-weight: 600;
	}
	h2 {
		font-size: 2em;
		color: black;
		text-transform: uppercase;
		font-weight: 600;
		text-align: left;
	}
	:global(h3) {
		margin: 0;
		font-size: 40px;
	}
	:global(h4) {
		font-size: 35px;
		font-weight: 300;
		margin: 0;
	}

	p {
		color: black;
		text-align: left;
		font-size: 2em;
	}

	.artists {
		display : flex;
		flex-wrap: wrap;
	}

	li {
		height: 300px;
		width: 300px;
		list-style: none;
		background-position: center;
		background-size: cover;
		text-align: left;
		padding: 10px;
		margin: 5px;
		box-shadow: 0 0 200px rgba(0,0,0,0.5) inset;
	}
	li:hover {
		opacity: 0.5;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>