import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type PokemonItem = {
    name: string;
    url: string;
};

type PokemonListResponse = {
    results: PokemonItem[];
};

type UseFetchPokemonsTypes = {
    pokemonList: PokemonItem[] | null;
};

const useFetchPokemons = (): UseFetchPokemonsTypes => {
    const [pokemonList, setPokemonList] = useState<PokemonItem[] | null>(null);
    const fetchPokemons = useCallback(async () => {
        const { data } = await axios.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/?limit=10');
        setPokemonList(data.results);
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, []);

    return { pokemonList };
};

export default useFetchPokemons;