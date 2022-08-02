import Heading from 'components/Heading';
import TaskView from 'components/TaskView';
import Text from 'components/Text';
import useModal from 'hooks/useModal';
import { TTask } from 'models';
import Wrapper from './style';

type TaskCardProps = {
  task: TTask;
};

function TaskCard({ task }: TaskCardProps) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { title, subtasks } = task;
  const subtasksLength = subtasks.length;
  const completedSubtasksLength = subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const subtasksStatus = `Subtasks (${completedSubtasksLength} of ${subtasksLength})`;

  return (
    <>
      <Wrapper onClick={openModal}>
        <Heading size="medium">{title}</Heading>
        <Text variant="secondary" as="span">
          {`${completedSubtasksLength} of ${subtasksLength} subtasks`}
        </Text>
      </Wrapper>
      {isModalOpen && (
        <TaskView
          task={task}
          closeModal={closeModal}
          subtasksStatus={subtasksStatus}
          statusOptions={['Doing', 'Done', 'Did']}
        />
      )}
    </>
  );
}

export default TaskCard;
