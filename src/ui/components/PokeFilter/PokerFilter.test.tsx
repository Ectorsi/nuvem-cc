import React from "react";
import { render } from "@testing-library/react";

import PokeFilter, { PokeFilterProps } from './PokeFilter';

const mockPokeFilter: PokeFilterProps = {
    inputTextProps: {
        label: 'Test',
        placeholder: 'Test',
        value: 'Test',
        onChange: jest.fn(),
        error: '',
    },
    selectBoxProps: {
        label: 'LabelTest',
        placeholder: 'PlaceholderTest',
        value: 'SelectrValue',
        onChange: jest.fn(),
        error: '',
        options: [
            { value: 'Option1', label: 'Option1' },
            { value: 'Option2', label: 'Option2' },
        ],
    },

};

describe('PokeFilter unit test', () => {
    it('should be able to match snapshot', () => {
        const { container } = render(<PokeFilter {...mockPokeFilter} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});