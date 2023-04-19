import { useEffect, useMemo, useState } from 'react';
import { getRegion, getRegionByName } from '../domains/region/regionDomain';
import { getLocationsByName } from '../domains/location/locationDomain';
import { UseRegionProps, UseRegionReturn } from './types';
import axios from 'axios';
import { Option } from '../ui/components/SelectBox/SelectBox';
import { getPokemonsByName } from '../domains/Area/areaDomain';

export const useRegion = ({
    setPokemonList,
    pokemonListInitalState,
}: UseRegionProps): UseRegionReturn => {
    const [regions, setRegions] = useState<string[] | null>(null);
    const [locations, setLocations] = useState<string[] | null>(null);
    const [areas, setAreas] = useState<string[] | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
        undefined
    );
    const [selectedLocation, setSelectedLocation] = useState<
        string | undefined
    >(undefined);
    const [selectedArea, setSelectedArea] = useState<string | undefined>(
        undefined
    );
    const [loading, setLoading] = useState(false);
    const [filterError, setFilterError] = useState<string | null>(null);

    const cleanFilters = (): void => {
        setRegions(null);
        setSelectedRegion(undefined);
        setLocations(null);
        setSelectedLocation(undefined);
        setAreas(null);
        setSelectedArea(undefined);
        setPokemonList(pokemonListInitalState);
        getRegionList();
    };

    const getRegionList = async () => {
        setLoading(true);
        try {
            const { data } = await getRegion();
            const regionListApiReturn = data.results.map(
                (region) => region.name
            );
            setRegions(regionListApiReturn);
        } catch (err) {
            if (axios.isAxiosError(err) && (err.response?.status === 500 || err.response?.status === 404)) {
                setFilterError('Error ao carregar o filtro de Regiões de pokemons');
            }
        } finally {
            setLoading(false);
        }
    };

    const getLocationList = async (value: string) => {
        setLoading(true);
        try {
            const { data } = await getRegionByName({ name: value });
            const locationListApiReturn = data.locations.map(
                (location) => location.name
            );
            setLocations(locationListApiReturn);
        } catch (err) {
            if (axios.isAxiosError(err) && (err.response?.status === 500 || err.response?.status === 404)) {
                setFilterError('Error ao carregar o filtro de localizações de pokemons');
            }
        } finally {
            setLoading(false);
        }
    };

    const getLocationAreaList = async (value: string) => {
        setLoading(true);
        try {
            const { data } = await getLocationsByName({ name: value });
            const locationAreaListApiReturn = data.areas.map(
                (area) => area.name
            );
            setAreas(locationAreaListApiReturn);
        } catch (err) {
            if (axios.isAxiosError(err) && (err.response?.status === 500 || err.response?.status === 404)) {
                setFilterError('Error ao carregar o filtro de Áreas de pokemons');
            }
        } finally {
            setLoading(false);
        }
    };

    const getPokemonListByArea = async (value: string) => {
        setLoading(true);
        try {
            const { data } = await getPokemonsByName({ name: value });
            const pokemonListApiReturn = data.pokemon_encounters.map(
                (item) => ({
                    name: item.pokemon.name,
                    url: item.pokemon.url,
                })
            );
            setPokemonList(pokemonListApiReturn);
        } catch (err) {
            if (axios.isAxiosError(err) && (err.response?.status === 500 || err.response?.status === 404)) {
                setFilterError('Error ao carregar o filtro de  pokemons');
            }
        } finally {
            setLoading(false);
        }
    };

    const normalizedRegionsToSelectBox: Option[] = useMemo(() => {
        if (!regions) return [];
        return regions.map((region) => ({
            value: region,
            label: region,
        }));
    }, [regions]);

    const normalizedLocationsToSelectBox: Option[] = useMemo(() => {
        if (!locations) return [];
        return locations.map((location) => ({
            value: location,
            label: location,
        }));
    }, [locations]);

    const normalizedAreasToSelectBox: Option[] = useMemo(() => {
        if (!areas) return [];
        return areas.map((area) => ({
            value: area,
            label: area,
        }));
    }, [areas]);

    const handleChangeRegion = async (value: string) => {
        setSelectedRegion(value);
        await getLocationList(value);
    };

    const handleChangeLocation = async (value: string) => {
        setSelectedLocation(value);
        await getLocationAreaList(value);
    };

    const handleChangeArea = async (value: string) => {
        setSelectedArea(value);
        await getPokemonListByArea(value);
    };

    useEffect(() => {
        void getRegionList();
    }, []);

    return {
        regionList: normalizedRegionsToSelectBox,
        locationList: normalizedLocationsToSelectBox,
        areaList: normalizedAreasToSelectBox,
        loading,
        handleChangeRegion,
        handleChangeLocation,
        handleChangeArea,
        selectedRegion,
        selectedLocation,
        selectedArea,
        filterError,
        cleanFilters,
    };
};
