import { useState } from "react";
import { GetPokemonDetailReturn, getPokemonDetails } from "../domains/pokemon/pokemonDomain";

type UseFetchPokemonDetailsReturn = {
    pokemonDetails: GetPokemonDetailReturn | null;
    handleSelectPokemon: (pokemonName: string) => Promise<void>;
    isPokemonDetailsLoading: boolean;
    handleShowModal: () => void;
};

const useFetchPokemonDetails = (): UseFetchPokemonDetailsReturn => {
    const [pokemonDetails, setPokemonDetails] = useState<GetPokemonDetailReturn | null>(null);
    const [isPokemonDetailsLoading, setIsPokemonDetailsLoading] = useState(false);
    const [isPokemonDetailModalOpen, setIsPokemonDetailModalOpen] = useState(false);

    const handleShowModal = () => {
        setIsPokemonDetailModalOpen(!isPokemonDetailModalOpen);
    }
    const handleSelectPokemon = async (pokemonName: string) => {
        setIsPokemonDetailsLoading(true)
        setIsPokemonDetailModalOpen(!isPokemonDetailModalOpen); // Para abrir a modal.
        try {
            const { data } = await getPokemonDetails({ pokemonName })
            setPokemonDetails(data)
        } catch (err) {
            // TODO: Tratar erro da api
            console.error(err)
        } finally {
            setIsPokemonDetailsLoading(false);
        }
    };

    return { pokemonDetails, handleSelectPokemon, isPokemonDetailsLoading, handleShowModal };
};

export default useFetchPokemonDetails;