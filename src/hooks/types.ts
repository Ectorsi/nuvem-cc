import { Dispatch, SetStateAction } from "react";
import { GetPokemonDetailReturn, Pokemon } from "../domains/pokemon/types";

type NormalizedFilters = {
    value: string;
    label: string;
}

export type UseRegionReturn = {
    selectedRegion: string | undefined
    selectedLocation: string | undefined
    selectedArea: string | undefined
    regionList: NormalizedFilters[]
    locationList: NormalizedFilters[]
    areaList: NormalizedFilters[]
    loading: boolean
    filterError: string | null
    handleChangeRegion: (value: string) => void
    handleChangeLocation: (value: string) => void
    handleChangeArea: (value: string) => void
    cleanFilters: () => void
}

export type UseRegionProps = {
    pokemonListInitalState: Pokemon[] | null
    setPokemonList: Dispatch<SetStateAction<Pokemon[] | null>>
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