import { BaseApi } from '../domains';
import { Pokemon } from '../pokemon/types';

export type GetPokemonsByNameParams = {
    name: string;
};

type Items = {
    pokemon: Pokemon;
};

export type GetPokemonsByNameReturn = {
    pokemon_encounters: Items[];
};

export const getPokemonsByName = ({ name }: GetPokemonsByNameParams) =>
    BaseApi.get<GetPokemonsByNameReturn>(`/location-area/${name}`);
