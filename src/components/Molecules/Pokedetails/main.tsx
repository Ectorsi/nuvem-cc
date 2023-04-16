import React from "react";
import * as S from "./styles";
import UseFetchPokemonDetails from "../../../hooks/UseFectchPokemonDetails";

type PokeDetailsProps = {
    isOpen: boolean;
    name: string;
};

const PokeDetails = ({ isOpen, name }: PokeDetailsProps) => {
    const [pokemonDetails] = UseFetchPokemonDetails(name);
    const { abilities, sptrites, weight } = pokemonDetails;
    const abilitiesList = abilities?.map((item) => {
        return <span key={item?.ability?.name}>{item?.ability?.name}</span>
    });

    const closeModal = () => {
        return !isOpen;
    };
    return (
        <S.Container>
            <h1>{name}</h1>
            {abilitiesList}
            <h2>{weight}</h2>
            <h2>{sptrites?.front_default}</h2>
            <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        </S.Container>
    )
};

export default PokeDetails;