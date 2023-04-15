export type PokemonDetails = {
    pokemonName: string;
    img_url?: string;
    weight: number;
    height: number;
};

export type PokemonItem = {
    pokemonName: string,
    url: string,
}

export type PokemonList = {
    results: PokemonItem[],
};