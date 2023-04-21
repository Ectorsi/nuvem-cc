import * as S from './styles';
import PokeCard, { PokeCardProps } from '../PokeCard/PokeCard';
import { Pokemon } from '../../../domains/pokemon/types';
import { Loader } from '../Loader/Loader';

export type PokeListProps = {
    pokemonList: Pokemon[] | [];
    loadingPokemonsList: boolean;
    errorFetchPokemons: string | null;
    errorSearchPokemons: boolean;
    pokeCard: Omit<PokeCardProps, 'name'>;
};

const PokeList = ({
    pokemonList,
    pokeCard,
    loadingPokemonsList,
    errorFetchPokemons,
    errorSearchPokemons,
}: PokeListProps) => {
    return (
        <S.Container id="list-items">
            {errorFetchPokemons && <S.Error>{errorFetchPokemons}</S.Error>}
            {errorSearchPokemons && <S.Error>Ops, não encontramos nem um Pokemon 😶</S.Error>}
            {pokemonList.length > 0 && !(errorSearchPokemons || errorFetchPokemons) &&
                pokemonList.map((pokemon) => (
                    <PokeCard
                        name={pokemon.name}
                        key={pokemon.name}
                        {...pokeCard}
                    />
                ))}
            {loadingPokemonsList && <Loader small />}
        </S.Container>
    );
};

export default PokeList;
