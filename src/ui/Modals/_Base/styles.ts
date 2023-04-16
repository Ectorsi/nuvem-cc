import styled from "styled-components";
import Theme from "../../../styles/theme";

export const Overlay = styled.div<{
    hidden?: boolean
}>`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0 ,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-Index: 1;
    opacity: ${({ hidden }) => !!hidden ? '0' : 'inherit'}
    
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    background-color: white;
    border: 2px solid ${Theme.colors.grayScale.bgCardBorder};
    border-radius: 12px;
    position:  absolute;
    width: 60%;
    z-index: 2;
    top: 70px;
    left: calc(50% - 30%);
    bottom: 70px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
`;