import React, { useState, MouseEvent } from "react";
import * as S from "./styles";
import Select from "../../components/Select/main";

type PokeFilterProps = { // TODO verificar quais tipos posso usar
    name?: string;
    rest?: any;
};

const PokeFilter = ({ name, ...rest }: PokeFilterProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <S.Container>
            {/* <Select placeholder="Filtre por região">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </Select> */}
        </S.Container>
    )
};

export default PokeFilter;