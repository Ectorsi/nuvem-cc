import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { PokemonItem, PokemonList } from "../@types/types";

const useFetchPokemons = () => {
    const [pokemonsListState, setPokemonsListState] = useState<PokemonItem[]>();
    const fetchPokemons = useCallback(async () => {
        const { data } = await axios.get<PokemonList>('https://pokeapi.co/api/v2/pokemon/?limit=10');
        setPokemonsListState(data.results);
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, []);

    return [pokemonsListState];
};

export default useFetchPokemons;