import { CSSProperties, ReactNode } from 'react';
import ReactPortal from '../../../utils/reactPortals';
import * as S from './styles';

type ModalBaseProps = {
    children: ReactNode;
    showModal: boolean;
    handleShowModal: () => void;
    modalWrapperStyles?: CSSProperties;
};

export const Modal = ({
    children,
    handleShowModal,
    showModal,
}: ModalBaseProps) => {
    if (!showModal) {
        return null;
    }

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <S.Overlay hidden={!showModal} />
            <S.Container>
                <S.CloseButton onClick={handleShowModal}>x</S.CloseButton>
                <S.Content>{children}</S.Content>
            </S.Container>
        </ReactPortal>
    );
};
