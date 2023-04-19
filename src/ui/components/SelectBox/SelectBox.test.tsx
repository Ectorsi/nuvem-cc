import { render, screen } from '@testing-library/react';

import SelectBox, { SelectProps } from './SelectBox';

const mockSelectBox: SelectProps = {
    label: 'LabelTest',
    placeholder: 'PlaceholderTest',
    value: 'SelectrValue',
    onChange: jest.fn(),
    error: '',
    options: [
        { value: 'Option1', label: 'Option1' },
        { value: 'Option2', label: 'Option2' },
    ],
};

describe('SelectBox unit test', () => {
    it("should be able to show the SelectBox's label and input", () => {
        const { container } = render(<SelectBox {...mockSelectBox} />);
        const Label = screen.getAllByText(/Test/i)[0];
        const option = screen.getAllByText(/Option1/i)[0];
        expect(option).toBeInTheDocument();
        expect(Label).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("should be able to show the SelectBox's error message", () => {
        render(<SelectBox {...mockSelectBox} error="error test" />);
        const errorMessage = screen.getByText(/error test/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
