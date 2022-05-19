<script>
	import Modal from "./Modal.svelte"
	export let artists;

	let showArtist = ""
</script>

<svelte:head>
	<title>V.A.R 22</title>
	<html lang="en" />
	<link rel="icon" href="https://i.imgur.com/RCo4eDs.png" />
</svelte:head>

<main>
	<h1>V.A.R 22 <br> 11 JUIN 2022</h1>

	<h2>A Propos</h2>
	<p>
		A l’occasion d’une après midi le 11 juin, découvrez le parcours de différent.e.s artistes numériques/makers lyonnais.e.s.
		<a href="https://fb.me/e/2jJ88Zrl3"><h3>Event Facebook</h3></a>
	</p>

	<h2>Programmation</h2>
	<ul class="artists">
	{#each artists as artist}
		<li on:click={() => showArtist = artist} style="background-image:url({artist.imgUrl})">
			
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
		color: black;
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