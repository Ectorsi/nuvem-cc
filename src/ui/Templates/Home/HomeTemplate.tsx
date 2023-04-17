import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";

import * as S from "./styles";
import PokeList, { PokeListProps } from "../../components/PokeList/PokeList";
import PokeFilter, { PokeFilterProps } from "../../components/PokeFilter/PokeFilter";
import PokemonDetailModal from "../../Modals/PokemonDetailModal/PokemonDetailModal";
import { GetPokemonDetailReturn } from "../../../domains/pokemon/types";

export type HomeTemplateProps = {
    title: string
    pokeList: PokeListProps
    pokemonDetails: GetPokemonDetailReturn | null
    showModal: boolean
    handleShowModal: () => void
    pokeFilter: PokeFilterProps
}

const HomeTemplate = ({ title, pokeList, pokemonDetails, showModal, handleShowModal, pokeFilter }: HomeTemplateProps) => {
    return (
        <>
            <S.Container>
                <PageTitle title={title} />
                <PokeFilter {...pokeFilter} />

                {/* 
                esse pokelist tem um clique que eh dentro do pocke card. 
                Esse click vai passar o nome do pokemon via callback handler. 
                essa logica vai estar em um custom hook que vai um state que vai armazenar o nome do pokemon que foi clicado.
            */}
                <PokeList
                    pokemonList={pokeList.pokemonList}
                    pokeCard={pokeList.pokeCard}
                    loadingPokemonsList={pokeList.loadingPokemonsList}
                    errorFetchPokemons={pokeList.errorFetchPokemons}
                />
            </S.Container>
            <PokemonDetailModal
                // {...pokemonDetails}
                handleShowModal={handleShowModal}
                showModal={showModal}
                pokemonDetails={pokemonDetails}

            />
        </>
    );
};

export default HomeTemplate;