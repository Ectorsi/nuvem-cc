import React from "react";
import HomeTemplate from "../../components/Templates/Home/main";
import * as S from "./styles";
import useFetchPokemons from "../../hooks/UseFetchPokemons";

const HomePage = () => {
    const [pokemonsListState] = useFetchPokemons();
    return (
        <S.Container>
            <HomeTemplate pokemonList={pokemonsListState?.results} />
        </S.Container>
    )
};

export default HomePage;