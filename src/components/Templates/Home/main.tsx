import React from "react";
import PageTitle from "../../Atoms/PageTitle/main";

import * as S from "./styles";
import PokeList from "../../Organisms/PokeList/main";
import { PokemonDetail } from "../../../pages/HomePage/main";

type HomeTemplate = {
    pokemonList: PokemonDetail[],
}

const HomeTemplate = ({ pokemonList }: HomeTemplate) => {
    return (
        <S.Container>
            <PageTitle title="Pokedéx" />
            <PokeList pokemonList={pokemonList} />
        </S.Container>
    );
};

export default HomeTemplate;