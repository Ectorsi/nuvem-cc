import React from "react";
import PageTitle from "../../Atoms/PageTitle/main";

import * as S from "./styles";
import PokeList from "../../Organisms/PokeList/main";
import { PokemonDetails, PokemonList } from "../../../@types/types";

type HomeTemplate = {
    pokemonListType: PokemonList,
    pokemonDetailsType: PokemonDetails,
    handlePokemonDetailsProp: (pokeName: string) => void,
}

const HomeTemplate = ({ pokemonListType, pokemonDetailsType, handlePokemonDetailsProp }: HomeTemplate) => {
    return (
        <S.Container>
            <PageTitle title="Pokedéx" />
            <PokeList
                pokemonListType={pokemonListType}
                pokemonDetailsType={pokemonDetailsType}
                handlePokemonDetailsProp={handlePokemonDetailsProp}
            />
        </S.Container>
    );
};

export default HomeTemplate;