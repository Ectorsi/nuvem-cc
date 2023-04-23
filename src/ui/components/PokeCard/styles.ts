import styled from 'styled-components';
import Theme from '../../../styles/theme';

export const Container = styled.button`
    background-color: ${Theme.colors.grayScale.bgCard};
    height: 50px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    width: 100%;

    &:hover {
        background-color: ${Theme.colors.grayScale.bgCardHover};
    }

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;

    color: ${Theme.colors.font.primary};
    font-weight: 500;
    letter-spacing: 1px;
`;
