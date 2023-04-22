import { render, screen } from '@testing-library/react';

import Skeleton, { SkeletonProps } from './Skeleton';

const SkeletonTestProps: SkeletonProps = {
    size: undefined,
};

describe('Skeleton', () => {
    it('should be able to match snapshot', () => {
        render(<Skeleton {...SkeletonTestProps} />);
        expect(screen.getByTestId('skeleton')).toMatchSnapshot();
    });
    it('should render correctly', () => {
        render(<Skeleton {...SkeletonTestProps} />);
        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });
    it('should render small size', () => {
        render(<Skeleton size='small' />);
        expect(screen.getByTestId('skeleton')).toHaveStyle('width: 20px');
    });
    it('should render large size', () => {
        render(<Skeleton size='large' />);
        expect(screen.getByTestId('skeleton')).toHaveStyle('width: 100px');
    });
});