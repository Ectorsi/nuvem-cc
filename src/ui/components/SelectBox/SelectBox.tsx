import React, { ChangeEvent, SelectHTMLAttributes } from 'react';
import * as S from './styles';

export type SelectProps = {
    label: string;
    placeholder: string;
    value: string | undefined;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    options: Array<{ value: string, label: string }>;
};

const SelectBox = ({ label, placeholder, value, onChange, error, options, ...rest }: SelectProps) => {
    return (
        <>
            <S.SelectLabel>{label}</S.SelectLabel>
            <S.InputContainer
                value={value}
                onChange={onChange}
                {...rest}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </S.InputContainer>
            {error && <div>{error}</div>}
        </>
    );
};

export default SelectBox;