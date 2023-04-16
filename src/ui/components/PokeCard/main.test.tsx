import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PokeCard from './main';

const mockPokeCard = {
    name: "pikachu",
    handleShowModal: jest.fn(),
    handleSelectPokemon: jest.fn(),
};

describe('PokeCard unit test', () => {
    it('should be able to show the pokemon name', async () => {
        render(<PokeCard {...mockPokeCard} />);
        const name = screen.getByText(/pikachu/i);
        expect(name).toBeInTheDocument();
    });

    it('should be able to click and open modal and then, close it', async () => {
        render(<PokeCard {...mockPokeCard} />);
        const card = screen.getByText(/pikachu/i);
        expect(card).toBeInTheDocument();
        fireEvent.click(card);
        const closeButton = screen.getByText(/X/i);
        expect(closeButton).toBeInTheDocument();
        fireEvent.click(closeButton);
        expect(closeButton).not.toBeInTheDocument();
        screen.debug(undefined, 300000);
    });
});