export type NamedAPIResource = {
	name: string;
	url: string;
};

export type PokemonAbility = {
	is_hidden: boolean;
	slot: number;
	ability: NamedAPIResource;
};

export type VersionGameIndex = {
	game_index: number;
	version: NamedAPIResource;
};

export type PokemonHeldItemVersion = {
	rarity: number;
	version: NamedAPIResource;
};

export type PokemonHeldItem = {
	item: NamedAPIResource;
	version_details: PokemonHeldItemVersion[];
};

export type PokemonMoveVersion = {
	level_learned_at: number;
	version_group: NamedAPIResource;
	move_learn_method: NamedAPIResource;
};

export type PokemonMove = {
	move: NamedAPIResource;
	version_group_details: PokemonMoveVersion[];
};

export type PokemonSprites = {
	back_default: string;
	back_female: string;
	back_shiny: string;
	back_shiny_female: string;
	front_default: string;
	front_female: string;
	front_shiny: string;
	front_shiny_female: string;
};

export type PokemonCries = {
	latest: string;
	legacy: string;
};

export type PokemonStat = {
	base_stat: number;
	effort: number;
	stat: NamedAPIResource;
};

export type PokemonType = {
	slot: number;
	type: NamedAPIResource;
};

export type PokemonTypePast = {
	generation: NamedAPIResource;
	types: PokemonType[];
};

export type Pokemon = {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: PokemonAbility[];
	forms: NamedAPIResource[];
	game_indices: VersionGameIndex[];
	held_items: PokemonHeldItem[];
	location_area_encounters: string;
	moves: PokemonMove[];
	species: NamedAPIResource;
	sprites: PokemonSprites;
	cries: PokemonCries;
	stats: PokemonStat[];
	types: PokemonType[];
	past_types: PokemonTypePast[];
};
