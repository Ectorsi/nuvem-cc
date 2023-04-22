import { CSSProperties } from 'react';
import { Modal } from '../_Base/Base';
import { GetPokemonDetailReturn } from '../../../domains/pokemon/types';
import { PokeDetails } from '../../components/Pokedetails/PokeDetails';

export type PokemonDetailModalProp = {
    handleShowModal: () => void;
    modalWrapperStyles?: CSSProperties;
    showModal: boolean;
    pokemonDetails: GetPokemonDetailReturn | null;
    isPokemonDetailsLoading: boolean;
};

const PokemonDetailModal = ({
    pokemonDetails,
    isPokemonDetailsLoading,
    ...rest
}: PokemonDetailModalProp) => (
    <Modal {...rest}>
        <PokeDetails
            pokemonDetails={pokemonDetails}
            isPokemonDetailsLoading={isPokemonDetailsLoading} />
    </Modal>
)

export default PokemonDetailModal;
