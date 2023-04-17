import React, { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { getPokemonDetails } from "../domains/pokemon/pokemonDomain";
import axios from "axios";
import { UseSearchProps } from "./types";

export const useSearch = ({ setPokemonList, pokemonListInitalState }: UseSearchProps) => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState<string | null>(null);

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
                    const filteredPokemon = await getPokemonDetails({ pokemonName: debouncedSearch });
                    setPokemonList([{
                        name: filteredPokemon.data.name,
                        url: `pokemon/${filteredPokemon.data.name}`
                    }])
                } catch (error) {
                    if (axios.isAxiosError(error) && error.response?.status === 404) {
                        setError('Pokemon não encontrado, verifique se o nome está correto e tente novamente.');
                        return;
                    }
                }
            };
            getPokemon();
        }
    }, [debouncedSearch]);

    return { search, error, handleSearch, clearSearch };
};