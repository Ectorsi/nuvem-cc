import React from "react";
import * as S from "./styles";
import PokeCard, { PokeCardProps } from "../PokeCard/PokeCard";
import { Pokemon } from "../../../domains/pokemon/types";
import { Spinner } from "../Loader/styles";

export type PokeListProps = {
    pokemonList: Pokemon[] | []
    loadingPokemonsList: boolean
    errorFetchPokemons: string | null
    pokeCard: Omit<PokeCardProps, 'name'>
}

const PokeList = ({ pokemonList, pokeCard, loadingPokemonsList, errorFetchPokemons }: PokeListProps) => {
    return (
        <S.Container id="list-items">
            {errorFetchPokemons && <S.Error>{errorFetchPokemons}</S.Error>}
            {loadingPokemonsList && <Spinner />}
            {pokemonList.length > 0 && (
                pokemonList.map((pokemon) => (
                    <PokeCard
                        name={pokemon.name}
                        key={pokemon.name}
                        {...pokeCard}
                    />
                ))
            )}
        </S.Container>
    );
}

export default PokeList;