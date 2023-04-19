import HomeTemplate from '../../Templates/HomeTemplate/HomeTemplate';
import * as S from './styles';
import { useSearch } from '../../../hooks/useSearch';
import { useRegion } from '../../../hooks/useGetPokemonByRegion';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import useFetchPokemons from '../../../hooks/UseFetchPokemons';
import useFetchPokemonDetails from '../../../hooks/UseFectchPokemonDetails';

const HomePage = () => {
    const {
        pokemonList,
        fetchPokemons,
        setPokemonList,
        pokemonListInitalState,
        loadingPokemonsList,
        errorFetchPokemons,
    } = useFetchPokemons();
    const {
        handleSelectPokemon,
        pokemonDetails,
        handleShowModal,
        isPokemonDetailModalOpen,
    } = useFetchPokemonDetails();
    const { handleSearch, search, error, clearSearch, isSearchLoading } = useSearch({
        pokemonListInitalState,
        setPokemonList,
    });

    const {
        regionList,
        locationList,
        areaList,
        handleChangeRegion,
        handleChangeLocation,
        selectedRegion,
        selectedLocation,
        selectedArea,
        handleChangeArea,
        filterError,
        cleanFilters,
    } = useRegion({
        setPokemonList,
        pokemonListInitalState,
    });

    useInfiniteScroll({ fetchPokemons });

    return (
        <S.Container>
            <HomeTemplate
                title="Pokedex"
                pokeList={{
                    pokemonList: pokemonList ?? [],
                    pokeCard: {
                        handleSelectPokemon: handleSelectPokemon,
                    },
                    loadingPokemonsList,
                    errorFetchPokemons,
                    errorSearchPokemons: !!error ?? false,
                }}
                pokemonDetails={pokemonDetails}
                showModal={isPokemonDetailModalOpen}
                handleShowModal={handleShowModal}
                pokeFilter={{
                    inputTextProps: {
                        placeholder: 'Informe o nome do Pokemon',
                        onChange: handleSearch,
                        value: search,
                        error: error ?? undefined,
                        loading: isSearchLoading,
                    },
                    selectBoxRegion: {
                        label: 'Região',
                        placeholder: 'Selecione uma região',
                        value: selectedRegion,
                        onChange: (e) => {
                            handleChangeRegion(e.target.value);
                        },
                        options: regionList,
                        error: filterError ?? undefined,
                    },
                    selectBoxLocation: {
                        label: 'Localização',
                        placeholder: 'Selecione uma localização',
                        value: selectedLocation,
                        onChange: (e) => {
                            handleChangeLocation(e.target.value);
                        },
                        options: locationList,
                        error: filterError ?? undefined,
                        disabled: !selectedRegion,
                    },
                    selectBoxAreas: {
                        label: 'Área',
                        placeholder: 'Selecione uma Área',
                        value: selectedArea,
                        onChange: (e) => {
                            handleChangeArea(e.target.value);
                        },
                        options: areaList,
                        error: filterError ?? undefined,
                        disabled: !selectedLocation,
                    },
                    cleanFilters,
                    clearSearch,
                }}
            />
        </S.Container>
    );
};

export default HomePage;
