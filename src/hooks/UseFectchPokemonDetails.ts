import axios from "axios";
import { useCallback, useState } from "react";
import { PokemonDetails } from "../@types/types";


const UseFetchPokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();

    const handlePokemonDetails = (pokemonName: string) => {
        fetchPokemons(pokemonName);
    };

    const fetchPokemons = useCallback(async (pokemonName: string) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}}`);
        setPokemonDetails(data);
    }, [])

    return [pokemonDetails, handlePokemonDetails];
};

export default UseFetchPokemonDetails;