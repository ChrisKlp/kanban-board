import Button from 'components/Button';
import Modal from 'components/Modal';
import Text from 'components/Text';
import useBoardState from 'stores/boardState';
import shallow from 'zustand/shallow';
import * as S from './style';

type DeleteModalProps = {
  taskId?: string;
  title: string;
  closeModal: () => void;
  toggleModals?: () => void;
};

function DeleteModal({
  taskId,
  title,
  closeModal,
  toggleModals,
}: DeleteModalProps) {
  const { deleteBoard, deleteTask, getActiveBoard } = useBoardState(
    (state) => ({
      deleteBoard: state.deleteBoard,
      deleteTask: state.deleteTask,
      getActiveBoard: state.getActiveBoard,
    }),
    shallow
  );

  const handleDelete = () => {
    if (taskId) {
      deleteTask(taskId);
    } else {
      deleteBoard();
    }
    closeModal();
  };

  const getName = () => {
    let name = getActiveBoard()?.name;

    if (taskId) {
      getActiveBoard()?.columns.forEach((column) => {
        column.tasks.forEach((task) => {
          if (task.id === taskId) {
            name = task.title;
          }
        });
      });
    }
    return name;
  };

  return (
    <Modal closeModal={closeModal}>
      <S.StyledHeading>{title}</S.StyledHeading>
      <Text variant="secondary" size="large">
        {taskId ? (
          <>
            Are you sure you want to delete the <strong>{getName()}</strong>{' '}
            task and its subtasks? This action cannot be reversed.
          </>
        ) : (
          <>
            Are you sure you want to delete the <strong>{getName()}</strong>{' '}
            board? This action will remove all columns and tasks and cannot be
            reversed.
          </>
        )}
      </Text>
      <S.Group>
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          variant="secondary"
          onClick={taskId ? toggleModals : closeModal}
        >
          Cancel
        </Button>
      </S.Group>
    </Modal>
  );
}

export default DeleteModal;
