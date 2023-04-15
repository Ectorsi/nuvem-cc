import React from "react";
import * as S from "./styles";

type PokeCardProps = {
    name: string,
    rest?: any,
}

const PokeCard = ({ name, ...rest }: PokeCardProps) => {
    return (
        <S.Container type="button" {...rest}>
            {name}
        </S.Container>
    )
};

export default PokeCard;