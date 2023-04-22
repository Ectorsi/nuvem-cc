import { render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

const mockButtonProp: ButtonProps = {
    onClick: jest.fn(),
    children: 'Test',
}

describe('Button unit test', () => {
    it('should render the button', () => {
        render(
            <Button {...mockButtonProp} >{mockButtonProp.children}</Button>
        )
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});