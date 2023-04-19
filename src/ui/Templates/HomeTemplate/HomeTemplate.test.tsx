import React from "react";
import { render, screen } from "@testing-library/react";

import HomeTemplate, { HomeTemplateProps } from './HomeTemplate';

const MockHomeTemplate: HomeTemplateProps = {
    title: 'Pokedex',
    pokeList: {
        pokemonList: [
            {
                name: 'Pikachu',
                url: 'www.test.com.br',
            },
            {
                name: 'Pikachu2',
                url: 'www.test.com.br',
            }
        ],
        pokeCard: {
            handleSelectPokemon: jest.fn()
        },
        errorFetchPokemons: '',
        loadingPokemonsList: false,
    },
    pokeFilter: {
        cleanFilters: jest.fn(),
        inputTextProps: {
            placeholder: 'Pesquisar',
            onChange: jest.fn(),
            value: 'Pikachu',
            error: '',
        },
        selectBoxRegion: {
            label: 'Tipo',
            placeholder: 'Selecione um tipo',
            value: 'Teste',
            onChange: jest.fn(),
            options: [
                {
                    value: 'Value Test',
                    label: 'Label test',
                },
                {
                    value: 'Value Test2',
                    label: 'Label test2',
                }
            ],
        },
        selectBoxLocation: {
            label: 'Geração',
            placeholder: 'Selecione uma geração',
            value: '',
            onChange: jest.fn(),
            options: [],
            error: '',
        },
        selectBoxAreas: {
            label: 'Espécie',
            placeholder: 'Selecione uma espécie',
            value: '',
            onChange: jest.fn(),
            options: [],
            error: '',
        },
    },
    pokemonDetails: {
        name: 'pikachu',
        abilities: [
            {
                ability: {
                    name: "static",
                    url: "https://pokeapi.co/api/v2/ability/9/"
                },
                is_hidden: false,
                slot: 1
            },
            {
                ability: {
                    name: "lightning-rod",
                    url: "https://pokeapi.co/api/v2/ability/31/"
                },
                is_hidden: true,
                slot: 3
            },
        ],
        height: 4,
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        weight: 60
    },
    showModal: false,
    handleShowModal: jest.fn(),
};

describe('HomeTemplate integration test', () => {
    it('should be able to show all components', () => {
        const { container } = render(<HomeTemplate {...MockHomeTemplate} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should be able to show the title', () => {
        render(<HomeTemplate {...MockHomeTemplate} />);
        const title = screen.getAllByText(/Pokedex/i)[0];
        expect(title).toBeInTheDocument();
    });

    it('should be able to show the PokeList', () => {
        render(<HomeTemplate {...MockHomeTemplate} />);
        const pokeList = screen.getAllByText(/Pikachu/i)[0];
        expect(pokeList).toBeInTheDocument();
    });

    it('should be able to show the PokeFilter', () => {
        render(<HomeTemplate {...MockHomeTemplate} />);
        const pokeFilter = screen.getByPlaceholderText(/Pesquisar/i);
        expect(pokeFilter).toBeInTheDocument();
    });

    it('should be able to show the PokemonDetails', () => {
        render(<HomeTemplate {...MockHomeTemplate} />);
        const pokemonDetails = screen.getAllByText(/pikachu/i)[0];
        expect(pokemonDetails).toBeInTheDocument();
    });

    it('should be able to show the Modal', () => {
        render(<HomeTemplate {...MockHomeTemplate} />);
        const modal = screen.getAllByText(/x/i)[0];
        expect(modal).toBeInTheDocument();
    });
});
