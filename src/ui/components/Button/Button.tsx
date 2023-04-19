import React from "react";

import * as S from "./styles";

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <S.ButtonContainer {...props}>
            {children}
        </S.ButtonContainer>
    )
};

export default Button;