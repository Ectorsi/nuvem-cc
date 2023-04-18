import React from "react";

import * as S from "./styles";

export const Loader = () => {
    return (
        <S.LoaderWrapper data-testid="loader">
            <S.Spinner />
        </S.LoaderWrapper>
    );
};