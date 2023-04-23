import * as S from './styles';
import PokeCard, { PokeCardProps } from '../PokeCard/PokeCard';
import { Pokemon } from '../../../domains/pokemon/types';
import { Loader } from '../Loader/Loader';
import { useVirtualScroll } from '../../../hooks/useVirtualization';

export type PokeListProps = {
    pokemonList: Pokemon[] | [];
    loadingPokemonsList: boolean;
    errorFetchPokemons: string | null;
    errorSearchPokemons: boolean;
    pokeCard: Omit<PokeCardProps, 'name'>;
    limitOfPokemons: number;
};

const PokeList = ({
    pokemonList,
    pokeCard,
    loadingPokemonsList,
    errorFetchPokemons,
    errorSearchPokemons,
    limitOfPokemons,
}: PokeListProps) => {
    const { bottomOffset, topOffset, virtualData } = useVirtualScroll({
        scrollContainerQuery: '#list-items',
        data: pokemonList,
        howManyILinesShouldDisplay: limitOfPokemons,
        lineHeight: 50,
    });
    return (
        <S.Container id="list-items">
            {errorFetchPokemons && <S.Error>{errorFetchPokemons}</S.Error>}
            {errorSearchPokemons && <S.Error>Ops, não encontramos nem um Pokemon 😶</S.Error>}
            <div style={{
                height: topOffset.current,
            }} />
            {!!pokemonList && !(errorSearchPokemons || errorFetchPokemons) &&
                virtualData.map((pokemon) => (
                    <PokeCard
                        name={pokemon.name}
                        key={pokemon.name}
                        {...pokeCard}
                    />
                ))}
            <div style={{
                height: bottomOffset.current,
            }} />
            {loadingPokemonsList && <Loader small />}
        </S.Container>
    );
};

export default PokeList;
