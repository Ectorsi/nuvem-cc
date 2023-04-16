import { BaseApi } from '../domains'

// TODO: Colocar tiopagens em um arquivo .types.ts
type GetPokemonsParams = {
    limit: number;
    offset: number;
}

export type Pokemon = {
    name: string;
    url: string;
}

type GetPokemonsReturn = {
    count: number, // quantidade total de pokemons
    next: string, // quando next for igual a null, significa que nao temos mais paginas para percorrer
    previous: string, // quando previous for igual a null, significa que nao temos mais paginas para voltar
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

export const getPokemons = ({ limit, offset }: GetPokemonsParams) => BaseApi.get<GetPokemonsReturn>(`/pokemon/?limit=${limit}&${offset}`);

export const getPokemonDetails = ({ pokemonName }: GetPokemonDetailParams) => BaseApi.get<GetPokemonDetailReturn>(`/pokemon/${pokemonName}`);