import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";

import Pokedetails from './main';

const mockPokedetails = {
    isOpen: true,
    name: 'pikachu',
};

const pockemonMockDetails = {
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

const apiMock = new MockAdapter(axios);

describe('PokeCard unit test', () => {
    it('should be able opem modal and to show the pokemon name', () => {
        act(() => {
            apiMock.onGet('https://pokeapi.co/api/v2/pokemon/pikachu')
                .reply(200, [{ ...pockemonMockDetails }]);
        });
        render(<Pokedetails {...mockPokedetails} />);
        const name = screen.getByText(/pikachu/i);
        const buttonClose = screen.getByText(/X/i);
        fireEvent.click(buttonClose);
        expect(name).toBeInTheDocument();
    });
});