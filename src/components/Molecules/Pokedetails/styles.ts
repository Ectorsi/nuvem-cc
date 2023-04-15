import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    background-color: white;
    border: 2px solid rgb(240, 240, 240);
    border-radius: 12px;
    position:  absolute;
    width: 60%;
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