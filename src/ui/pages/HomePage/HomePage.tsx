import React from 'react';
import HomeTemplate from "../../Templates/Home/HomeTemplate";
import * as S from "./styles";
import { useSearch } from '../../../hooks/useSearch';
import { useRegion } from '../../../hooks/useGetPokemonByRegion';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import useFetchPokemons from '../../../hooks/useFetchPokemons';
import useFetchPokemonDetails from '../../../hooks/useFectchPokemonDetails';

const HomePage = () => {
    const { pokemonList, fetchPokemons, setPokemonList, pokemonListInitalState, loadingPokemonsList, errorFetchPokemons } = useFetchPokemons();
    const { handleSelectPokemon, isPokemonDetailsLoading, errorFetchPokemonDetails, pokemonDetails, handleShowModal, isPokemonDetailModalOpen } = useFetchPokemonDetails();
    const { handleSearch, search, error } = useSearch({
        pokemonListInitalState,
        setPokemonList
    });

    const { region, handleChangeRegion, selectedRegion, filterError } = useRegion({
        setPokemonList,
        pokemonListInitalState,
    });

    const {
        currentPage,
    } = useInfiniteScroll({
        fetchPokemons
    })
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
                    errorFetchPokemons
                }}
                pokemonDetails={pokemonDetails}
                showModal={isPokemonDetailModalOpen}
                handleShowModal={handleShowModal}
                pokeFilter={{
                    inputTextProps: {
                        label: 'Pesquisar',
                        placeholder: 'Pesquisar',
                        onChange: handleSearch,
                        value: search,
                        error: error ?? undefined,
                    },
                    selectBoxProps: {
                        label: 'Tipo',
                        placeholder: 'Selecione um tipo',
                        value: selectedRegion,
                        onChange: (e) => {
                            handleChangeRegion(e.target.value);
                        },
                        options: region,
                        error: filterError ?? undefined,
                    },
                }}
            />
        </S.Container>
    )
};

export default HomePage;