import React from "react";
import { render, screen } from "@testing-library/react";

import PageTitle from './main';

describe('PageTitle unit test', () => {
    it('should be able to show the page title', () => {
        render(<PageTitle title="Test" />);
        const title = screen.getByText(/Title/i);
        expect(title).toBeInTheDocument();
    });
});