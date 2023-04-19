import styled from "styled-components";
import Theme from "../../../styles/theme";

export const ButtonContainer = styled.button`
    padding: 7px;
    border-radius: 4px;
    border: 1px solid ${Theme.colors.grayScale.bgCard};
    background: none;
    color: ${Theme.colors.grayScale.bgCard};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
        background: ${Theme.colors.grayScale.bgCard};
        color: ${Theme.colors.font.primary};
    };

    &:active {
        scale: 0.95;
    };
`;