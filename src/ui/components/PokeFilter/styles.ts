import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    & > h2 {
        margin-bottom: 15px;
        font-weight: bold;
    }

    & > p {
        color: black;
        font-weight: 500;
        margin-bottom: 10px;
        align-self: center;
    }
`;

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-around;
    flex-wrap: wrap;

    margin-bottom: 16px;
`;
