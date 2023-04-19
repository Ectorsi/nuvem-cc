import { ChangeEvent, InputHTMLAttributes } from 'react';
import * as S from './styles';
import { Loader } from '../Loader/Loader';

export type InputTextProps = {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    loading?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
    placeholder,
    value,
    onChange,
    error,
    loading,
    ...rest
}: InputTextProps) => {
    return (
        <>
            <S.InputContainer
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                error={error}
                {...rest}
            />
            {loading && <Loader data-testid="loader" small />}
            {error && <S.Error>{error}</S.Error>}
        </>
    );
};

export default InputText;
