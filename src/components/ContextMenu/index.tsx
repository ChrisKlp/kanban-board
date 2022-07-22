import iconVerticalEllipsis from 'assets/icon-vertical-ellipsis.svg';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useRef, useState } from 'react';
import * as S from './style';

type ContextMenuProps = {
  handleEditBoard?: () => void;
  handleDeleteBoard?: () => void;
};

function ContextMenu({ handleEditBoard, handleDeleteBoard }: ContextMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const onClose = () => setIsOpen(false);

  const handleEdit = () => {
    onClose();
    if (handleEditBoard) handleEditBoard();
  };

  const handleDelete = () => {
    onClose();
    if (handleDeleteBoard) handleDeleteBoard();
  };

  useOnClickOutside(ref, onClose);
  return (
    <S.Wrapper ref={ref}>
      <S.Button onClick={() => setIsOpen(!isOpen)}>
        <img src={iconVerticalEllipsis} alt="Context menu icon" />
      </S.Button>
      {isOpen && (
        <S.Content>
          <S.Option onClick={handleEdit}>Edit Board</S.Option>
          <S.Option onClick={handleDelete} variant="destructive">
            Delete Board
          </S.Option>
        </S.Content>
      )}
    </S.Wrapper>
  );
}

export default ContextMenu;
