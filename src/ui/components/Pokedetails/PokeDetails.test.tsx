import React from "react";
import { render, screen } from "@testing-library/react";

import { PokeDetails } from './PokeDetails';

const mockpokemonDetails = {
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
    }
};

describe('PokeDetails unit test', () => {
    it('should be able to show the pokemon details', () => {
        const { container } = render(<PokeDetails {...mockpokemonDetails} />);
        const name = screen.getByText(/pikachu/i);
        expect(name).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});