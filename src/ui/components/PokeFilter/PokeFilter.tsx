import React from "react";
import * as S from "./styles";
import InputText, { InputTextProps } from "../InputText/InputText";
import SelectBox, { SelectProps } from "../SelectBox/SelectBox";
import Button from "../Button/Button";


export type PokeFilterProps = {
    inputTextProps: InputTextProps;
    selectBoxRegion: SelectProps;
    selectBoxLocation: SelectProps;
    selectBoxAreas: SelectProps;
    cleanFilters: () => void;
};

const PokeFilter = ({ inputTextProps, selectBoxRegion, selectBoxLocation, selectBoxAreas, cleanFilters }: PokeFilterProps) => {

    return (
        <S.Container>
            <h2>Pesquise o Pokemon pelo nome</h2>
            <InputText {...inputTextProps} />
            <h2>Filtrar pokemons por região/área</h2>
            <p>Para filtrar um pokemon por regiao/area, você deve preencher todos os filtros!</p>
            <S.SelectContainer>
                <SelectBox {...selectBoxRegion} />
                <SelectBox {...selectBoxLocation} />
                <SelectBox {...selectBoxAreas} />
                <Button onClick={cleanFilters}>Limpar filtros</Button>
            </S.SelectContainer>
        </S.Container>
    )
};

export default PokeFilter;