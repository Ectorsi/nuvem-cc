export type GetPokemonsParams = {
    limit: number;
    offset: number;
}

export type Pokemon = {
    name: string;
    url: string;
}

export type GetPokemonsReturn = {
    count: number,
    next: string,
    previous: string,
    results: Pokemon[]
}

export type GetPokemonDetailParams = {
    pokemonName: string;
}

export type AbilityDetail = {
    name: string;
    url: string
}

export type Ability = {
    ability: AbilityDetail,
    is_hidden: boolean,
    slot: number
}

export type GetPokemonDetailReturn = {
    abilities: Ability[];
    sprites: {
        front_default: string;
    }
    weight: number;
    height: number;
    name: string;
}