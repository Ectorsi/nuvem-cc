import React, { useMemo } from "react";
import * as S from "./styles";
import PokeCard from "../../Molecules/PokeCard/main";
import useFetchPokemons from "../../../hooks/UseFetchPokemons";

type PokemonItem = {
    name: string;
    url: string;
};

const PokeList = () => {
    const { pokemonList } = useFetchPokemons();

    const renderPokeList = useMemo(() => {
        return pokemonList?.map((pokemon: PokemonItem) => (
            <PokeCard
                key={pokemon.name}
                name={pokemon.name}
            />
        ))
    }, [pokemonList]);
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