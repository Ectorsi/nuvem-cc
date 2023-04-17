import * as React from 'react';
import * as S from './styles';

type PageTitleProps = {
    title: string,
};

const PageTitle = ({ title }: PageTitleProps) => {
    return (
        <S.Container>
            {title}
        </S.Container>
    )
};

export default PageTitle;