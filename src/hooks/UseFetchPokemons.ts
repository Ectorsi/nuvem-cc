import { useCallback, useEffect, useState } from "react";
import { Pokemon, getPokemons } from "../domains/pokemon/pokemonDomain";

type UseFetchPokemonsTypes = {
    pokemonList: Pokemon[] | null;
};

const useFetchPokemons = (): UseFetchPokemonsTypes => {
    const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
    const fetchPokemons = useCallback(async () => {
        const { data } = await getPokemons({
            limit: 10,
            offset: 0
        });
        setPokemonList(data.results);
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, []);

    return { pokemonList };
};

export default useFetchPokemons;