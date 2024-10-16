import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
	const json = await res.json();
	return {
		pokemons: json.results
	};
};
