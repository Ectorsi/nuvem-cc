
import * as S from './styles';

export type SkeletonProps = {
    size?: 'small' | 'large';
};

const Skeleton = ({ size }: SkeletonProps) => (
    <S.SkeletonContainer data-testid="skeleton" size={size} />
);

export default Skeleton;