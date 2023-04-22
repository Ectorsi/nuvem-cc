
import * as S from './styles';

export type SkeletonProps = {
    size?: 'small' | 'large';
};

const Skeleton = ({ size }: SkeletonProps) => (
    <S.SkeletonContainer size={size} />
);

export default Skeleton;