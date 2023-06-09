import { render, screen } from '@testing-library/react';

import PokeList, { PokeListProps } from './PokeList';

jest.mock('../../../hooks/useVirtualization', () => ({
    useVirtualScroll: () => ({
        bottomOffset: {
            current: 0,
        },
        topOffset: {
            current: 0,
        },
        virtualData: [
            {
                name: 'Pikachu',
                url: 'www.test.com.br',
            },
            {
                name: 'Pikachu2',
                url: 'www.test.com.br',
            },
        ],
    }),
}));

const MockPokeListProps: PokeListProps = {
    pokemonList: [
        {
            name: 'Pikachu',
            url: 'www.test.com.br',
        },
        {
            name: 'Pikachu2',
            url: 'www.test.com.br',
        },
    ],
    pokeCard: {
        handleSelectPokemon: jest.fn(),
    },
    loadingPokemonsList: false,
    errorFetchPokemons: null,
    errorSearchPokemons: false,
    limitOfPokemons: 25,
};

describe('PokeList unit test', () => {
    it('should be able to show two Pokemons in the list', () => {
        render(<PokeList {...MockPokeListProps} />);
        const pokemon1 = screen.getByText('Pikachu');
        const pokemon2 = screen.getByText('Pikachu2');
        expect(pokemon1).toBeInTheDocument();
        expect(pokemon2).toBeInTheDocument();
    });

    it('should be able to show PokeList with error', () => {
        render(
            <PokeList {...MockPokeListProps} errorFetchPokemons={'error'} />
        );
        const error = screen.getByText('error');
        expect(error).toBeInTheDocument();
    });
});
