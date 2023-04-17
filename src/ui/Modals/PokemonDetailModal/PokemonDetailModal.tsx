import React, { CSSProperties } from 'react';
import { Modal } from '../_Base/Base';
import { PokeDetails } from '../../components/PokeDetails/PokeDetails';
import { GetPokemonDetailReturn } from '../../../domains/pokemon/types';

export type PokemonDetailModalProp = {
    handleShowModal: () => void;
    modalWrapperStyles?: CSSProperties;
    showModal: boolean;
    pokemonDetails: GetPokemonDetailReturn | null;
}

const PokemonDetailModal = ({
    pokemonDetails,
    ...rest
}: PokemonDetailModalProp) => (
    <Modal {...rest}>
        <PokeDetails pokemonDetails={pokemonDetails} />
    </Modal >
);

export default PokemonDetailModal;