import { ChangeEvent } from 'react';
import * as S from './styles';

export type Option = {
    value: string;
    label: string;
};

export type SelectProps = {
    label: string;
    placeholder: string;
    value: string | undefined;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    options: Option[];
    disabled?: boolean;
};
const SelectBox = ({
    label,
    placeholder,
    error,
    value,
    onChange,
    options,
    disabled,
}: SelectProps) => {
    return (
        <S.Wrapper>
            <S.Label>{label}</S.Label>
            <S.SelectContainer
                disabled={disabled}
                value={value}
                onChange={onChange}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </S.SelectContainer>
            {!!error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    );
};

export default SelectBox;
