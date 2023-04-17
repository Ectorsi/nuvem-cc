import React from "react";
import * as S from "./styles";
import PokeCard, { PokeCardProps } from "../PokeCard/PokeCard";
import { Pokemon } from "../../../domains/pokemon/types";

export type PokeListProps = {
    pokemonList: Pokemon[] | []
    loadingPokemonsList: boolean
    errorFetchPokemons: string | null
    pokeCard: Omit<PokeCardProps, 'name'>
}

const PokeList = ({ pokemonList, pokeCard, loadingPokemonsList, errorFetchPokemons }: PokeListProps) => {
    const showResults = pokemonList.length > 0 && (
        pokemonList.map((pokemon) => (
            <PokeCard
                name={pokemon.name}
                key={pokemon.name}
                {...pokeCard}
            />
        ))
    )
    const isLoading = !loadingPokemonsList ? showResults : <S.Loading>Carregando...</S.Loading>;
    return (
        <S.Container id="list-items">
            {!errorFetchPokemons ? isLoading : <S.Error>{errorFetchPokemons}</S.Error>}
        </S.Container>
    );
}

export default PokeList;