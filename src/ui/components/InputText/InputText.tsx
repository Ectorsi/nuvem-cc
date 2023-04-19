import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type InputTextProps = {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({ placeholder, value, onChange, error, ...rest }: InputTextProps) => {
    return (
        <>
            <S.InputContainer
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...rest}
            />
            {error && <S.Error>{error}</S.Error>}
        </>
    );
};

export default InputText;