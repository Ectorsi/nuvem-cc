import PageTitle from '../../components/PageTitle/PageTitle';

import * as S from './styles';
import PokeList, { PokeListProps } from '../../components/PokeList/PokeList';
import PokeFilter, {
    PokeFilterProps,
} from '../../components/PokeFilter/PokeFilter';
import PokemonDetailModal from '../../Modals/PokemonDetailModal/PokemonDetailModal';
import { GetPokemonDetailReturn } from '../../../domains/pokemon/types';

export type HomeTemplateProps = {
    title: string;
    pokeList: PokeListProps;
    pokemonDetails: GetPokemonDetailReturn | null;
    showModal: boolean;
    handleShowModal: () => void;
    pokeFilter: PokeFilterProps;
    isPokemonDetailsLoading: boolean;
};

const HomeTemplate = ({
    title,
    pokeList,
    pokemonDetails,
    showModal,
    handleShowModal,
    pokeFilter,
    isPokemonDetailsLoading,
}: HomeTemplateProps) => {
    return (
        <>
            <S.Container>
                <PageTitle title={title} />
                <PokeFilter {...pokeFilter} />
                <PokeList {...pokeList} />
            </S.Container>
            <PokemonDetailModal
                handleShowModal={handleShowModal}
                showModal={showModal}
                pokemonDetails={pokemonDetails}
                isPokemonDetailsLoading={isPokemonDetailsLoading}
            />
        </>
    );
};

export default HomeTemplate;
