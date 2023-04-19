import { render, screen } from '@testing-library/react';

import InputText, { InputTextProps } from './InputText';

const mockInputText: InputTextProps = {
    placeholder: 'Test',
    value: 'Test',
    onChange: jest.fn(),
    error: '',
    loading: false,
};

describe('InputText unit test', () => {
    it("should be able to show the InputText's label and input", () => {
        const { container } = render(<InputText {...mockInputText} />);
        const input = screen.getByPlaceholderText(/Test/i);
        expect(input).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("should be able to show the InputText's error message", () => {
        render(<InputText {...mockInputText} error="error test" />);
        const errorMessage = screen.getAllByText(/error test/i)[0];
        expect(errorMessage).toBeInTheDocument();
    });

    it("should be able to show the InputText's loader", () => {
        render(<InputText {...mockInputText} loading />);
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
    });
});
