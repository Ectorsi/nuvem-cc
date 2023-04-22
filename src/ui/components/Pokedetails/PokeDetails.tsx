import * as S from './styles';
import { GetPokemonDetailReturn } from '../../../domains/pokemon/types';
import Skeleton from '../Skeleton/Skeleton';

type PokeDetailsProps = {
    pokemonDetails: GetPokemonDetailReturn | null;
    isPokemonDetailsLoading: boolean;
};

export const PokeDetails = ({ pokemonDetails, isPokemonDetailsLoading }: PokeDetailsProps) => {
    return (
        <S.Container>
            <S.TitleDetails>{isPokemonDetailsLoading ? <Skeleton /> : pokemonDetails?.name}</S.TitleDetails>
            {isPokemonDetailsLoading ? <Skeleton size='large' /> : <S.Image
                src={pokemonDetails?.sprites?.front_default}
                alt={`Pokemon ${pokemonDetails?.name}`}
            />}
            <S.Caracteristics>
                <S.AbilitiesCaracteristics>
                    {isPokemonDetailsLoading ? <Skeleton /> : (
                        <>
                            <S.AbilitiesLabel>Habilidades</S.AbilitiesLabel>
                            {pokemonDetails?.abilities?.map((item) => (
                                <h2 key={item?.ability?.name}>
                                    {item?.ability?.name.toUpperCase()}
                                </h2>
                            ))}
                        </>
                    )}
                </S.AbilitiesCaracteristics>
                <S.WeightCaracteristics>
                    {isPokemonDetailsLoading ? <Skeleton /> : (
                        <>
                            <S.WeightLabel>Peso</S.WeightLabel>
                            <h2>{pokemonDetails?.weight}</h2>
                        </>
                    )}
                </S.WeightCaracteristics>
            </S.Caracteristics>
        </S.Container>
    );
};
