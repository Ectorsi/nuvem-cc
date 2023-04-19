import styled from 'styled-components';
import Theme from '../../../styles/theme';

export const Container = styled.button`
    background-color: ${Theme.colors.grayScale.bgCard};
    height: 50px;
    border-radius: 4px;
    border: none;

    &:hover {
        background-color: ${Theme.colors.grayScale.bgCardHover};
    }

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;

    color: ${Theme.colors.font.primary};
    font-weight: 500;
    letter-spacing: 1px;

    margin-top: 15px;
`;
