export type PokemonDetail = {
    name: string,
    url: string,
};

export type Pokemon = {
    results: PokemonDetail[],
};