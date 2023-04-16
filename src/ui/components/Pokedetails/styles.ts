import styled from "styled-components";
import Theme from "../../../styles/theme";

export const Container = styled.main`
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
    top: 70px;
    left: calc(50% - 30%);
    bottom: 70px;
`;

export const TitleDetails = styled.h1`
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    height: 70px;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;

    align-self: center;
`;

export const AbilitiesLabel = styled.label`
    font-weight: bold;
    letter-spacing: 3px;
`;

export const Caracteristics = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: ${Theme.colors.grayScale.bgCard};

    width: 100%;
    height: 95px;
`;

export const WeightLabel = styled.label`
    font-weight: bold;
    letter-spacing: 3px;
`;

export const AbilitiesCaracteristics = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    background-color: ${Theme.colors.grayScale.bgCard};

    width: 100%;
    height: 100%;
    padding: 15px;
`;

export const WeightCaracteristics = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${Theme.colors.grayScale.bgCard};

    width: 100%;
    height: 100%;
    padding: 15px;
    font-size: 20px;
`;



export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;

    border: none;
    background: none;
`;