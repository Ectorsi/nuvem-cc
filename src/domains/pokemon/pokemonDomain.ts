import { BaseApi } from '../domains';
import {
    GetPokemonDetailParams,
    GetPokemonDetailReturn,
    GetPokemonsParams,
    GetPokemonsReturn,
} from './types';

export const getPokemons = ({ limit, offset }: GetPokemonsParams) =>
    BaseApi.get<GetPokemonsReturn>(`/pokemon/?limit=${limit}&offset=${offset}`);

export const getPokemonDetails = ({ pokemonName }: GetPokemonDetailParams) =>
    BaseApi.get<GetPokemonDetailReturn>(`/pokemon/${pokemonName}`);
