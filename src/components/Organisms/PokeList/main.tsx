import React, { useMemo } from "react";
import * as S from "./styles";
import PokeCard from "../../Molecules/PokeCard/main";
import { PokemonDetails, PokemonItem, PokemonList } from "../../../@types/types";

type PokeListProps = {
    pokemonListType: PokemonList,
    pokemonDetailsType: PokemonDetails,
    handlePokemonDetailsProp: (pokemonName: string) => void,
}

const PokeList = ({ pokemonListType, pokemonDetailsType, handlePokemonDetailsProp }: PokeListProps) => {
    console.log('pokemonList', pokemonListType);

    const renderPokeList = useMemo(() => {
        return pokemonListType?.results?.map((pokemon: PokemonItem) => (
            <PokeCard
                key={pokemon.pokemonName}
                pokeName={pokemon.pokemonName}
                pokemonDetailsType={pokemonDetailsType}
                handlePokemonDetailsProp={handlePokemonDetailsProp}
            />
        ))
    }, [pokemonListType]);
    return (
        <S.Container>
            {renderPokeList ? (
                renderPokeList
            ) : (
                <span>LISTA VAZIA...</span>
            )
            }
        </S.Container>
    )
};

export default PokeList;