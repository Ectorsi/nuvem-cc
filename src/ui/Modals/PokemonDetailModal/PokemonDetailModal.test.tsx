import { render } from '@testing-library/react';

import PokemonDetailModal from './PokemonDetailModal';

const MockPokemonDetailModalProps = {
    handleShowModal: jest.fn(),
    modalWrapperStyles: {},
    showModal: false,
    pokemonDetails: {
        name: 'pikachu',
        abilities: [
            {
                ability: {
                    name: 'static',
                    url: 'https://pokeapi.co/api/v2/ability/9/',
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: 'lightning-rod',
                    url: 'https://pokeapi.co/api/v2/ability/31/',
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 4,
        sprites: {
            front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        },
        weight: 60,
    },
    isPokemonDetailsLoading: false,
};

describe('PageTitle unit test', () => {
    it('should be able to show two Pokemons in the list', () => {
        const { container } = render(
            <PokemonDetailModal {...MockPokemonDetailModalProps} />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
