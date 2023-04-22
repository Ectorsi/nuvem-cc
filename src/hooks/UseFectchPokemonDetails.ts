import { useCallback, useState } from 'react';
import { getPokemonDetails } from '../domains/pokemon/pokemonDomain';
import { GetPokemonDetailReturn } from '../domains/pokemon/types';
import { UseFetchPokemonDetailsReturn } from './types';

const useFetchPokemonDetails = (): UseFetchPokemonDetailsReturn => {
    const [pokemonDetails, setPokemonDetails] =
        useState<GetPokemonDetailReturn | null>(null);
    const [loadingDetails, setLoadingDetails] = useState(true);
    const [isPokemonDetailModalOpen, setIsPokemonDetailModalOpen] =
        useState(false);
    const [errorFetchPokemonDetails, setErrorFetchPokemonDetails] = useState<
        string | null
    >(null);

    const handleShowModal = useCallback(() => {
        setIsPokemonDetailModalOpen((oldState) => {
            return !oldState;
        });
    }, [setIsPokemonDetailModalOpen]);

    const handleSelectPokemon = useCallback(
        async (pokemonName: string) => {
            setLoadingDetails(true);
            handleShowModal();
            try {
                const { data } = await getPokemonDetails({ pokemonName });
                setPokemonDetails(data);
                setLoadingDetails(false);
            } catch (errorFetchPokemonDetails) {
                setErrorFetchPokemonDetails(
                    'Error ao carregar os detalhes do pokemon'
                );
            } finally {
                setLoadingDetails(false);
            }
        },
        [handleShowModal, setLoadingDetails, getPokemonDetails]
    );

    return {
        pokemonDetails,
        handleSelectPokemon,
        isPokemonDetailsLoading: loadingDetails,
        handleShowModal,
        isPokemonDetailModalOpen,
        errorFetchPokemonDetails,
    };
};

export default useFetchPokemonDetails;
