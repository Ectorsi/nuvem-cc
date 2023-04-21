import styled from 'styled-components';
import Theme from '../../../styles/theme';

export const Overlay = styled.button<{
    hidden?: boolean;
}>`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: ${({ hidden }) => (!!hidden ? '0' : 'inherit')};
`;

export const Container = styled.div`
    max-height: 95%;
    height: fit-content;
    border: 2px solid ${Theme.colors.grayScale.bgCardBorder};
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
    width: 50%;
`;

export const Content = styled.div`
    width: 100%;
    position: relative;
    overflow: auto;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 9;
    color: black;
    font-size: 40px;
`;
