import styled, { css } from "styled-components";
import { SkeletonProps } from "./Skeleton";

const skeletonModifiers = {
    small: () => `
        width: 20px;
        height: 10px;
    `,
    large: () => `
        width: 100px;
        height: 100px;
    `,
};

export const SkeletonContainer = styled.div<SkeletonProps>`
    ${({ size }) => css`
        background-image: linear-gradient(90deg, #dddddd 0%, #eeeeee 50%, #dddddd 100%);
        background-size: 200px 100%;
        animation: loading 0.8s infinite linear;
        @keyframes loading {
            0% {
                background-position: -200px 0;
            },
            100% {
                background-position: calc(200px + 100%) 0;
            }
        };
        border-radius: 0.5rem;
        width: 40%;
        height: 30px;
        align-self: center;
        ${!!size && skeletonModifiers[size]};
    `}
`;