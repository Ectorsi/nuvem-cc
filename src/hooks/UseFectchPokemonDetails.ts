import { useCallback, useState } from 'react';
import { getPokemonDetails } from '../domains/pokemon/pokemonDomain';
import { GetPokemonDetailReturn } from '../domains/pokemon/types';
import { UseFetchPokemonDetailsReturn } from './types';

const useFetchPokemonDetails = (): UseFetchPokemonDetailsReturn => {
    const [pokemonDetails, setPokemonDetails] =
        useState<GetPokemonDetailReturn | null>(null);
    const [isPokemonDetailsLoading, setIsPokemonDetailsLoading] =
        useState(false);
    const [isPokemonDetailModalOpen, setIsPokemonDetailModalOpen] =
        useState(false);
    const [errorFetchPokemonDetails, setErrorFetchPokemonDetails] = useState<
        string | null
    >(null);

    const handleShowModal = useCallback(() => {
        setIsPokemonDetailModalOpen((oldState) => {
            return !oldState;
        });
    }, [setIsPokemonDetailModalOpen, setIsPokemonDetailModalOpen]);

    const handleSelectPokemon = useCallback(
        async (pokemonName: string) => {
            handleShowModal();
            setIsPokemonDetailsLoading(true);
            try {
                const { data } = await getPokemonDetails({ pokemonName });
                setPokemonDetails(data);
            } catch (errorFetchPokemonDetails) {
                setErrorFetchPokemonDetails(
                    'Error ao carregar os detalhes do pokemon'
                );
            } finally {
                setIsPokemonDetailsLoading(false);
            }
        },
        [handleShowModal, setIsPokemonDetailsLoading, getPokemonDetails]
    );

    return {
        pokemonDetails,
        handleSelectPokemon,
        isPokemonDetailsLoading,
        handleShowModal,
        isPokemonDetailModalOpen,
        errorFetchPokemonDetails,
    };
};

export default useFetchPokemonDetails;
