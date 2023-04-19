import { useCallback, useEffect, useState } from 'react';
import { getPokemons } from '../domains/pokemon/pokemonDomain';
import axios from 'axios';
import { GetPokemonsParams, Pokemon } from '../domains/pokemon/types';

const useFetchPokemons = () => {
    const [pokemonListInitalState, setPokemonListInitalState] = useState<
        Pokemon[] | null
    >(null);
    const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
    const [loadingPokemonsList, setLoadingPokemonsList] = useState(false);
    const [errorFetchPokemons, setErrorFetchPokemons] = useState<string | null>(
        null
    );
    const fetchPokemons = useCallback(
        async ({ limit, offset }: GetPokemonsParams) => {
            setLoadingPokemonsList(true);
            try {
                const { data } = await getPokemons({
                    limit,
                    offset,
                });

                setPokemonList((oldState) => {
                    if (oldState) {
                        return [...oldState, ...data.results];
                    }
                    return data.results;
                });
                setPokemonListInitalState((oldState) => {
                    if (oldState) {
                        return [...oldState, ...data.results];
                    }
                    return data.results;
                });

                setLoadingPokemonsList(false);
            } catch (errorFetchPokemons) {
                if (
                    axios.isAxiosError(errorFetchPokemons) &&
                    errorFetchPokemons.response?.status === 500
                ) {
                    setErrorFetchPokemons(
                        'Error ao carregar a lista de pokemons'
                    );
                }
            } finally {
                setLoadingPokemonsList(false);
            }
        },
        []
    );

    useEffect(() => {
        fetchPokemons({
            limit: 10,
            offset: 0,
        });
    }, []);

    return {
        pokemonList,
        loadingPokemonsList,
        errorFetchPokemons,
        setPokemonList,
        pokemonListInitalState,
        fetchPokemons,
    };
};

export default useFetchPokemons;
