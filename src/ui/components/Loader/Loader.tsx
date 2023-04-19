import * as S from './styles';

export type LoaderProps = {
    small?: boolean;
};

export const Loader = ({ small }: LoaderProps) => {
    return (
        <S.LoaderWrapper data-testid="loader" small={small}>
            <S.Spinner />
        </S.LoaderWrapper>
    );
};
