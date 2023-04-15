import React from "react";
import * as S from "./styles";
import { PokemonDetails } from "../../../@types/types";

type PokeDetailsProps = {
    isOpen: boolean;
    pokemonDetailsType: PokemonDetails,
};

const PokeDetails = ({ isOpen, pokemonDetailsType }: PokeDetailsProps) => {

    const { pokemonName, weight, height } = pokemonDetailsType;

    const closeModal = () => {
        return !isOpen;
    };
    return (
        <S.Container>
            <h1>{pokemonName}</h1>
            <h2>{weight}</h2>
            <h2>{height}</h2>
            <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        </S.Container>
    )
};

export default PokeDetails;