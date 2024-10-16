<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const pokemons = data.pokemons;
</script>

<h1>Welcome to the Pokedex</h1>

{#each pokemons as pokemon}
	<PokemonCard {pokemon} />
{/each}
