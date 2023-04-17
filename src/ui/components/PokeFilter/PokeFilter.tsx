import React from "react";
import * as S from "./styles";
import InputText, { InputTextProps } from "../InputText/InputText";
import SelectBox, { SelectProps } from "../SelectBox/SelectBox";


export type PokeFilterProps = {
    inputTextProps: InputTextProps;
    selectBoxProps: SelectProps;
};

const PokeFilter = ({ inputTextProps, selectBoxProps }: PokeFilterProps) => {

    return (
        <S.Container>
            <InputText {...inputTextProps} />
            <SelectBox {...selectBoxProps} />
        </S.Container>
    )
};

export default PokeFilter;