import styled from 'styled-components';
import { InputTextProps } from './InputText';
import Theme from '../../../styles/theme';

const { colorError } = Theme.colors.main;

type InputStyleProps = Pick<InputTextProps, 'error'>

export const InputContainer = styled.input<InputStyleProps>`
    border: ${({ error }) => (!!error ? `2px solid ${colorError}` : '1px solid #000')};
    border-radius: 4px;
    padding: 8px;
    width: 100%;
    margin-bottom: 16px;
    position: relative;
`;

export const InputLabel = styled.label`
    display: block;
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 600;

    color: #000;
`;

export const Error = styled.span`
    display: block;
    margin-top: 8px;

    font-size: 14px;
    font-weight: 600;

    color: white;
`;
