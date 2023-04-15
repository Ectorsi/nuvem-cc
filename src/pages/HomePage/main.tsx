import React, { useCallback, useEffect, useState } from "react";
import HomeTemplate from "../../components/Templates/Home/main";
import * as S from "./styles";
import axios from "axios";

export type PokemonDetail = {
    name: string,
    url: string,
};

export type Pokemon = {
    results: PokemonDetail[],
};

const HomePage = () => {
    const [pokemonsListState, setPokemonsListState] = useState<Pokemon>({} as Pokemon);
    const fetchPokemons = useCallback(async () => {
        const { data } = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/?limit=10');
        setPokemonsListState(data);
        console.log(data);
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <S.Container>
            <HomeTemplate pokemonList={pokemonsListState?.results} />
        </S.Container>
    )
};

export default HomePage;