import { createPortal } from 'react-dom';
import * as S from './style';

const modalRoot = document.body as HTMLElement;

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

function Modal({ children, closeModal }: ModalProps) {
  return createPortal(
    <S.Wrapper>
      <S.Container>{children}</S.Container>
      <S.Overlay onClick={closeModal} />
    </S.Wrapper>,
    modalRoot
  );
}

export default Modal;
