import React, { useState } from "react";
import * as S from "./styles";
import { createPortal } from 'react-dom';
import PokeDetails from "../Pokedetails/main";
import { PokemonDetails } from "../../../@types/types";


export type PokeCardProps = {
    pokeName: string;
    pokemonDetailsType: PokemonDetails,
    handlePokemonDetailsProp: (pokeName: string) => void,
    rest?: any;
};

const PokeCard = ({ pokeName, handlePokemonDetailsProp, pokemonDetailsType, ...rest }: PokeCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        handlePokemonDetailsProp(pokeName);
        setIsOpen(!isOpen);
    };
    return (
        <S.Container type="button" onClick={handleClick} {...rest}>
            <h1>{pokeName}</h1>
            {isOpen && createPortal(
                <PokeDetails pokemonDetailsType={pokemonDetailsType} isOpen={isOpen} />,
                document.body
            )}
        </S.Container>
    )
};

export default PokeCard;