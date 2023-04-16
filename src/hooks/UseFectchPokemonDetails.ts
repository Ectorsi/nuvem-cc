import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type Ability = {
    ability: {
        name: string;
    };
}

type PokemonDetailed = {
    abilities: Ability[];
    sptrites: {
        front_default: string;
    }
    weight: number;
}

type UseFetchPokemonDetailsTypes = [
    PokemonDetailed
];

const useFetchPokemonDetails = (pokemonName: string): UseFetchPokemonDetailsTypes => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailed>({} as PokemonDetailed);

    const fetchPokemons = useCallback(async (pokemonName: string) => {
        const { data } = await axios.get<PokemonDetailed>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonDetails(data);
    }, [pokemonName])

    useEffect(() => {
        fetchPokemons(pokemonName);
    }, []);

    return [pokemonDetails];
};

export default useFetchPokemonDetails;