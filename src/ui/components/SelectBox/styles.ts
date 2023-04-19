import styled from 'styled-components';
import { SelectProps } from './SelectBox';
import Theme from '../../../styles/theme';

const { colorError } = Theme.colors.main;

type SelectBoxStyledProps = Pick<SelectProps, 'error'>;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const SelectContainer = styled.select<SelectBoxStyledProps>`
    border: ${({ error }) => (!!error ? `2px solid ${colorError}` : '1px solid #000')};
    border-radius: 4px;
    padding: 8px;
    width: 240px;

    @media (max-width: 519px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${Theme.colors.font.secondary};
`;

export const Error = styled.span`
    color: ${Theme.colors.main.colorError};
`;
