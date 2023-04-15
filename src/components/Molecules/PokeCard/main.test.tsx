import React from "react";
import { render, screen } from "@testing-library/react";

import PokeCard from './main';

const mockPokeCard = {
    pokename: "pikachu",
    isOpen: true,
};

describe('PokeCard unit test', () => {
    it('should be able to show the pokemon name', () => {
        render(<PokeCard {...mockPokeCard} />);
        const name = screen.getByText(/pikachu/i);
        expect(name).toBeInTheDocument();
    });
});