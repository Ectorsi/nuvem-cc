import React from "react";
import PageTitle from "../../components/PageTitle/main";

import * as S from "./styles";
import PokeList, { PokeListProps } from "../../components/PokeList/PokeList";
import PokeFilter from "../../components/PokeFilter/main";
import PokemonDetailModal, { PokemonDetailModalProp } from "../../Modals/PokemonDetailModal/PokemonDetailModal";
import { PokeCardProps } from "../../components/PokeCard/main";
import { GetPokemonDetailReturn } from "../../../domains/pokemon/pokemonDomain";

type HomeTemplateProps = {
    title: string
    pokeList: PokeListProps
    pokemonDetails: GetPokemonDetailReturn | null
    showModal: boolean
    handleShowModal: () => void
    pokeCard: Omit<PokeCardProps, "name">
}

const HomeTemplate = ({ title, pokeList, pokemonDetails, showModal, handleShowModal, pokeCard }: HomeTemplateProps) => {
    return (
        <S.Container>
            <PageTitle title={title} />
            {/* <PokeFilter /> */}

            {/* 
                esse pokelist tem um clique que eh dentro do pocke card. 
                Esse click vai passar o nome do pokemon via callback handler. 
                essa logica vai estar em um custom hook que vai um state que vai armazenar o nome do pokemon que foi clicado.
            */}
            <PokeList
                pokemonList={pokeList.pokemonList}
                pokeCard={pokeCard}
            />
            <PokemonDetailModal
                // {...pokemonDetails}
                handleShowModal={handleShowModal}
                showModal={showModal}
                pokemonDetails={pokemonDetails}

            />
        </S.Container>
    );
};

export default HomeTemplate;