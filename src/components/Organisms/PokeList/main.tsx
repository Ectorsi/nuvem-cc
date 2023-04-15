import React, { useMemo } from "react";
import * as S from "./styles";
import PokeCard from "../../Molecules/PokeCard/main";
import { PokemonDetail } from "../../../@types/types";

type PokeListProps = {
    pokemonList: PokemonDetail[],
}

const PokeList = ({ pokemonList }: PokeListProps) => {
    const renderPokeList = useMemo(() => {
        return pokemonList?.map((pokemon: PokemonDetail) => (<PokeCard key={pokemon.name} name={pokemon.name} />))
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