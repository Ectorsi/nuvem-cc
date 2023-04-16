import React, { useState, MouseEvent } from "react";
import * as S from "./styles";
import { createPortal } from 'react-dom';
import PokeDetails from "../Pokedetails/main";

type PokeCardProps = {
    name: string;
    rest?: any;
};

const PokeCard = ({ name, ...rest }: PokeCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <S.Container type="button" onClick={e => handleClick(e)} {...rest}>
            <h1>{name}</h1>
            {isOpen && createPortal(
                <PokeDetails name={name} isOpen={isOpen} />,
                document.body
            )}
        </S.Container>
    )
};

export default PokeCard;