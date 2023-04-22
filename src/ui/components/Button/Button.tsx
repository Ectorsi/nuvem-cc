import React from 'react';

import * as S from './styles';

export type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    children,
    ...props
}: ButtonProps) => {
    return <S.ButtonContainer {...props}>{children}</S.ButtonContainer>;
};

export default Button;
