import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PokeCard from './PokeCard';

const mockPokeCard = {
    name: "pikachu",
    handleShowModal: jest.fn(),
    handleSelectPokemon: jest.fn(),
};

describe('PokeCard unit test', () => {
    it('should be able to show the pokemon name', async () => {
        const { container } = render(<PokeCard {...mockPokeCard} />);
        const name = screen.getByText(/pikachu/i);
        expect(name).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should be able to click and open modal and then, close it', async () => {
        render(<PokeCard {...mockPokeCard} />);
        const cardName = screen.getByText(/pikachu/i);
        fireEvent.click(cardName);
        expect(cardName).toBeInTheDocument();
    });
});