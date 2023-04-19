import { render, screen } from '@testing-library/react';

import PokeFilter, { PokeFilterProps } from './PokeFilter';

const mockPokeFilter: PokeFilterProps = {
    clearSearch: jest.fn(),
    cleanFilters: jest.fn(),
    inputTextProps: {
        placeholder: 'Test',
        value: 'Test',
        onChange: jest.fn(),
        error: '',
    },
    selectBoxRegion: {
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
    selectBoxLocation: {
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
    selectBoxAreas: {
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
    it('should be able to clear fields', () => {
        render(<PokeFilter {...mockPokeFilter} />);
        const button = screen.getByText('Limpar filtros');
        button.click();
        expect(mockPokeFilter.clearSearch).toHaveBeenCalled();
        expect(mockPokeFilter.cleanFilters).toHaveBeenCalled();
    });
});
