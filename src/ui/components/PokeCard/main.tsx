import React from "react";
import * as S from "./styles";

export type PokeCardProps = {
    name: string;
    handleShowModal: () => void
    handleSelectPokemon: (pokemonName: string) => void
};

const PokeCard = ({ name, handleShowModal, handleSelectPokemon }: PokeCardProps) => (
    <S.Container type="button" onClick={() => {
        handleSelectPokemon(name);
        handleShowModal();
    }}>
        <h1>{name}</h1>
    </S.Container>
);

export default PokeCard;