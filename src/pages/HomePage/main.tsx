import React from 'react';
import HomeTemplate from "../../components/Templates/Home/main";
import * as S from "./styles";
import useFetchPokemons from "../../hooks/UseFetchPokemons";

const HomePage = () => {
    const [pokemonsListState] = useFetchPokemons();
    const [pokemonDetails, handlePokemonDetails] = useFetchPokemons();
    return (
        <S.Container>
            <HomeTemplate
                pokemonListType={pokemonsListState}
                pokemonDetails={pokemonDetails}
                handlePokemonDetails={handlePokemonDetails}
            />
        </S.Container>
    )
};

export default HomePage;