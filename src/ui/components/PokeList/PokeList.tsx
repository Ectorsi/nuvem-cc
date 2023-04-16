import React from "react";
import * as S from "./styles";
import PokeCard, { PokeCardProps } from "../PokeCard/main";
import { Pokemon } from "../../../domains/pokemon/pokemonDomain";

export type PokeListProps = {
    pokemonList: Pokemon[]
    pokeCard: Omit<PokeCardProps, 'name'>
}

const PokeList = ({ pokemonList, pokeCard }: PokeListProps) => (
    <S.Container>
        {pokemonList.length > 0 ? (
            pokemonList.map((pokemon) => (
                <PokeCard
                    name={pokemon.name}
                    key={pokemon.name}
                    {...pokeCard}
                />
            ))
        ) : "Lista Vazia"}
    </S.Container>
);

export default PokeList;