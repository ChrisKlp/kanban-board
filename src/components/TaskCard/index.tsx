import DeleteModal from 'components/DeleteModal';
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
  const {
    isModalOpen: isDeleteModalOpen,
    closeModal: closeDeleteModal,
    openModal: openDeleteModal,
  } = useModal();

  const statusOptions = getActiveBoard()?.columns.map((column) => column.name);

  const subtasksLength = task.subtasks.length;
  const completedSubtasksLength = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const subtasksStatus = `Subtasks (${completedSubtasksLength} of ${subtasksLength})`;

  const toggleModals = (isDeleteTask = false) => {
    if (isModalOpen) {
      closeModal();
      return isDeleteTask ? openDeleteModal() : openFormModal();
    }
    closeDeleteModal();
    closeFormModal();
    return openModal();
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
          onEditClick={toggleModals}
          onDeleteClick={() => toggleModals(true)}
          subtasksStatus={subtasksStatus}
          statusOptions={statusOptions}
        />
      )}
      {isFormModalOpen && (
        <TaskForm
          task={task}
          title="Edit Task"
          closeModal={closeFormModal}
          toggleModals={toggleModals}
          statusOptions={statusOptions}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          taskId={task.id}
          title="Delete this task?"
          closeModal={closeDeleteModal}
          toggleModals={() => toggleModals(true)}
        />
      )}
    </>
  );
}

export default TaskCard;
