import { render, screen } from '@testing-library/react';

import PageTitle from './PageTitle';

describe('PageTitle unit test', () => {
    it('should be able to show the page title', () => {
        const { container } = render(<PageTitle title="Test" />);
        const title = screen.getByText(/Test/i);
        expect(title).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
