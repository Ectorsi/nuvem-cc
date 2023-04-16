import React from "react";
import PageTitle from "../../Atoms/PageTitle/main";

import * as S from "./styles";
import PokeList from "../../Organisms/PokeList/main";

const HomeTemplate = () => {
    return (
        <S.Container>
            <PageTitle title="Pokedéx" />
            <PokeList />
        </S.Container>
    );
};

export default HomeTemplate;