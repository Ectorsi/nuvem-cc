import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Pokedetails from './main';

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

describe('PokeCard unit test', () => {
    it('should be able opem modal and to show the pokemon name', () => {
        render(<Pokedetails {...mockpokemonDetails} />);
        const name = screen.getByText(/pikachu/i);
        const buttonClose = screen.getByText(/X/i);
        fireEvent.click(buttonClose);
        expect(name).toBeInTheDocument();
    });
});