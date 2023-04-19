import { memo } from 'react';
import * as S from './styles';

export type PokeCardProps = {
    name: string;
    handleSelectPokemon: (pokemonName: string) => void;
};

const PokeCard = ({ name, handleSelectPokemon }: PokeCardProps) => (
    <S.Container
        type="button"
        onClick={() => {
            handleSelectPokemon(name);
        }}
    >
        <h1>{name}</h1>
    </S.Container>
);

export default memo(PokeCard);
