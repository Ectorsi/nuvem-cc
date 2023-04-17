import styled from "styled-components";

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
    /* background: #fff; */
    max-height: 95%;
    height: fit-content;
    border-radius: 10px;
    position: fixed;
    overflow: hidden;
    overflow-y: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 2;
    min-width: 10%;
    max-width: 80%;
`;

export const Content = styled.div`
    width: 100%;
    height: 520px;
    position: relative;
    overflow: auto;
    padding: 10px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 40px;
    right: 100px;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 9;
    color: white;
    font-size: 20px;
`;