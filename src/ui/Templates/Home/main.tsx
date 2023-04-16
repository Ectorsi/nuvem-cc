import React from "react";
import PageTitle from "../../components/PageTitle/main";

import * as S from "./styles";
import PokeList from "../../components/PokeList/main";
import PokeFilter from "../../components/PokeFilter/main";

const HomeTemplate = () => {
    return (
        <S.Container>
            <PageTitle title="Pokedéx" />
            {/* <PokeFilter /> */}
            <PokeList />
        </S.Container>
    );
};

export default HomeTemplate;