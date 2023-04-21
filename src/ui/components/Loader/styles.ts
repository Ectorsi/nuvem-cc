import styled, { keyframes } from 'styled-components';
import { LoaderProps } from './Loader';

type LoaderStyleProps = LoaderProps;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div<LoaderStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    scale: ${({ small }) => (small ? 0.5 : 1)};
`;

export const Spinner = styled.div`
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-left-color: #000;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${spin} 1s linear infinite;
    transform: translateZ(0);
`;
