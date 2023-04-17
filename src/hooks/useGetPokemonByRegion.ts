import { useEffect, useMemo, useState } from "react";
import { getRegion, getRegionByName } from "../domains/region/regionDomain";
import { getGenerationByUrl } from "../domains/generation/generationDomain";
import { UseRegionProps, UseRegionReturn } from "./types";
import axios from "axios";

export const useRegion = ({
    setPokemonList,
    pokemonListInitalState
}: UseRegionProps): UseRegionReturn => {
    const [regions, setRegion] = useState<string[] | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [filterError, setFilterError] = useState<string | null>(null);

    const getRegions = async () => {
        setLoading(true);
        try {
            const { data } = await getRegion();
            const regionList = data.results.map((region) => region.name);
            setRegion(regionList)
        } catch (err) {

        } finally {
            setLoading(false);
        }
    };

    const normalizedRegionsToSelectBox: {
        value: string;
        label: string;
    }[] = useMemo(() => {
        if (!regions) return [];
        return regions.map((region) => ({
            value: region,
            label: region,
        }));
    }, [regions])

    const getSelectedPokemonsByRegion = async (value: string) => {
        setLoading(true);
        try {
            const { data } = await getRegionByName({ name: value })

            const generation = await getGenerationByUrl({
                url: data.main_generation.url
            })

            const pokemons = generation.data.pokemon_species.map(pokemon => pokemon.name);
            const filterPokemonsListByPokemons = pokemonListInitalState?.filter(pokemon => pokemons.includes(pokemon.name))

            if (filterPokemonsListByPokemons) {
                setPokemonList(filterPokemonsListByPokemons)
            }
        } catch (err) {
            if (axios.isAxiosError(err) && err.response?.status === 500) {
                setFilterError('Error ao carregar o filtro de pokemons');
            }
        } finally {
            setLoading(false);
        }
    }

    const handleChangeRegion = async (value: string) => {
        setSelectedRegion(value);
        await getSelectedPokemonsByRegion(value)
    }

    useEffect(() => {
        void getRegions();
    }, [])

    return { region: normalizedRegionsToSelectBox, loading, handleChangeRegion, selectedRegion, filterError };
};