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
  const { getActiveBoard } = useBoardState();
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    isModalOpen: isFormModalOpen,
    closeModal: closeFormModal,
    openModal: openFormModal,
  } = useModal();

  const statusOptions = getActiveBoard()?.columns.map((column) => column.name);

  const subtasksLength = task.subtasks.length;
  const completedSubtasksLength = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const subtasksStatus = `Subtasks (${completedSubtasksLength} of ${subtasksLength})`;

  const open2ndModal = () => {
    closeModal();
    openFormModal();
  };

  const close2ndModal = () => {
    closeFormModal();
    openModal();
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
          onEditClick={open2ndModal}
          subtasksStatus={subtasksStatus}
          statusOptions={statusOptions}
        />
      )}
      {isFormModalOpen && (
        <TaskForm
          task={task}
          title="Edit Task"
          closeModal={closeFormModal}
          close2ndModal={close2ndModal}
          statusOptions={statusOptions}
        />
      )}
    </>
  );
}

export default TaskCard;
