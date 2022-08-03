import Heading from 'components/Heading';
import TaskForm from 'components/TaskForm';
import TaskView from 'components/TaskView';
import Text from 'components/Text';
import useModal from 'hooks/useModal';
import { TTask } from 'models';
import useBoardState from 'stores/boardState';
import Wrapper from './style';

type TaskCardProps = {
  task: TTask;
};

function TaskCard({ task }: TaskCardProps) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    isModalOpen: isFormModalOpen,
    closeModal: closeFormModal,
    openModal: openFormModal,
  } = useModal();

  const activeBoard = useBoardState((state) =>
    state.boards.find((board) => board.id === state.activeBoard)
  );
  const statusOptions = activeBoard?.columns.map((column) => column.name);

  const subtasksLength = task.subtasks.length;
  const completedSubtasksLength = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const subtasksStatus = `Subtasks (${completedSubtasksLength} of ${subtasksLength})`;

  const onEditClick = () => {
    closeModal();
    openFormModal();
  };

  return (
    <>
      <Wrapper onClick={openModal}>
        <Heading size="medium">{task.title}</Heading>
        <Text variant="secondary" as="span">
          {`${completedSubtasksLength} of ${subtasksLength} subtasks`}
        </Text>
      </Wrapper>
      {isModalOpen && (
        <TaskView
          task={task}
          closeModal={closeModal}
          onEditClick={onEditClick}
          subtasksStatus={subtasksStatus}
          statusOptions={statusOptions}
        />
      )}
      {isFormModalOpen && (
        <TaskForm
          task={task}
          title="Edit Task"
          closeModal={closeFormModal}
          statusOptions={statusOptions}
        />
      )}
    </>
  );
}

export default TaskCard;
