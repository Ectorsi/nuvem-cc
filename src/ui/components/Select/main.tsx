import * as React from 'react';
import * as S from './styles';

type SelectProps = {
    placeholder: string;
    options: string[];
    value: string;
};

const Select = ({ options, placeholder, value }: SelectProps) => {
    return (
        <S.Container placeholder={placeholder} value={value} />
    )
};

export default Select;