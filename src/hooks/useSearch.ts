import React, { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { getPokemonDetails } from '../domains/pokemon/pokemonDomain';
import axios from 'axios';
import { UseSearchProps } from './types';

/**
 * `useSearch` É um hook customizado que faz a busca de itens de uma lista.
 */
export const useSearch = ({
    setPokemonList,
    pokemonListInitalState,
}: UseSearchProps) => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSearchLoading, setIsSearchLoading] = useState(false);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const debouncedSearch = useDebounce(search, 2000);

    const clearSearch = () => {
        setSearch('');
        setPokemonList(pokemonListInitalState);
        setError(null);
    };

    useEffect(() => {
        if (debouncedSearch === '') {
            clearSearch();
        }
        if (debouncedSearch) {
            const getPokemon = async () => {
                try {
                    setIsSearchLoading(true);
                    const filteredPokemon = await getPokemonDetails({
                        pokemonName: debouncedSearch,
                    });
                    setPokemonList([
                        {
                            name: filteredPokemon.data.name,
                            url: `pokemon/${filteredPokemon.data.name}`,
                        },
                    ]);
                } catch (error) {
                    if (
                        axios.isAxiosError(error) &&
                        error.response?.status === 404
                    ) {
                        setError(
                            'Pokemon não encontrado, verifique se o nome está correto e tente novamente.'
                        );
                        return;
                    }
                } finally {
                    setIsSearchLoading(false);
                }
            };
            getPokemon();
        }
    }, [debouncedSearch]);

    return { search, error, handleSearch, clearSearch, isSearchLoading };
};
