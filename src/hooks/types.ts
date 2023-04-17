import { Dispatch, SetStateAction } from "react";
import { GetPokemonDetailReturn, Pokemon } from "../domains/pokemon/types";

type normalizedRegion = {
    value: string;
    label: string;
}

export type UseRegionReturn = {
    selectedRegion: string | undefined
    region: normalizedRegion[]
    loading: boolean
    filterError: string | null
    handleChangeRegion: (value: string) => void
}

export type UseRegionProps = {
    pokemonListInitalState: Pokemon[] | null
    setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[] | null>>
}

export type UseFetchPokemonDetailsReturn = {
    pokemonDetails: GetPokemonDetailReturn | null;
    handleSelectPokemon: (pokemonName: string) => Promise<void>;
    isPokemonDetailsLoading: boolean;
    isPokemonDetailModalOpen: boolean;
    handleShowModal: () => void;
    errorFetchPokemonDetails: string | null;
};


export type UseSearchProps = {
    pokemonListInitalState: Pokemon[] | null
    setPokemonList: Dispatch<SetStateAction<Pokemon[] | null>>
}