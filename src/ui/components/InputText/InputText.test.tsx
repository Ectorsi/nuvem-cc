import React from "react";
import { render, screen } from "@testing-library/react";

import InputText, { InputTextProps } from './InputText';

const mockInputText: InputTextProps = {
    label: 'Test',
    placeholder: 'Test',
    value: 'Test',
    onChange: jest.fn(),
    error: '',
};

describe('InputText unit test', () => {
    it("should be able to show the InputText's label and input", () => {
        const { container } = render(<InputText {...mockInputText} />);
        const Label = screen.getByText(/Test/i);
        const input = screen.getByPlaceholderText(/Test/i);
        expect(input).toBeInTheDocument();
        expect(Label).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("should be able to show the InputText's error message", () => {
        render(<InputText {...mockInputText} error="error test" />);
        const errorMessage = screen.getAllByText(/error test/i)[0];
        expect(errorMessage).toBeInTheDocument();
    });
});