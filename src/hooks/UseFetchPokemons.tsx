import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "../@types/types";

const useFetchPokemons = () => {
    const [pokemonsListState, setPokemonsListState] = useState<Pokemon>({} as Pokemon);
    const fetchPokemons = useCallback(async () => {
        const { data } = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/?limit=10');
        setPokemonsListState(data);
        console.log(data);
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, []);

    return [pokemonsListState];
};

export default useFetchPokemons;