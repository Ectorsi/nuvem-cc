import React from 'react';
import HomeTemplate from "../../Templates/Home/main";
import * as S from "./styles";
import useFetchPokemons from '../../../hooks/UseFetchPokemons';
import useFetchPokemonDetails from '../../../hooks/UseFectchPokemonDetails';

const HomePage = () => {
    const { pokemonList } = useFetchPokemons();
    const { handleSelectPokemon, isPokemonDetailsLoading, pokemonDetails, handleShowModal } = useFetchPokemonDetails();

    return (
        <S.Container>
            <HomeTemplate
                title="Pokedex"
                pokeList={{
                    pokemonList: pokemonList ?? [],
                    pokeCard: {
                        handleSelectPokemon: handleSelectPokemon,
                        handleShowModal: handleShowModal
                    }
                }}
                pokemonDetails={pokemonDetails}
                showModal={isPokemonDetailsLoading}
                handleShowModal={() => { }}
                pokeCard={{
                    handleSelectPokemon: handleSelectPokemon,
                    handleShowModal: handleShowModal
                }}
            />
        </S.Container>
    )
};

export default HomePage;