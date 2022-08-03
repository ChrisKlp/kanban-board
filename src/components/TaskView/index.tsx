/* eslint-disable react/no-unescaped-entities */
import ContextMenu from 'components/ContextMenu';
import Heading from 'components/Heading';
import Modal from 'components/Modal';
import Select from 'components/Select';
import Subtask from 'components/Subtask';
import Text from 'components/Text';
import { TTask } from 'models';
import * as S from './style';

type TaskViewProps = {
  task: TTask;
  statusOptions?: string[];
  subtasksStatus: string;
  onEditClick: () => void;
  closeModal: () => void;
};

export default function TaskView({
  task,
  statusOptions,
  subtasksStatus,
  onEditClick,
  closeModal,
}: TaskViewProps) {
  return (
    <Modal closeModal={closeModal}>
      <S.HeaderWrapper>
        <Heading as="h2">{task.title}</Heading>
        <ContextMenu variant="task" onEditClick={onEditClick} />
      </S.HeaderWrapper>
      {!!task.description && (
        <Text variant="secondary" size="large">
          {task.description}
        </Text>
      )}
      <S.SubtasksWrapper>
        <Text variant="secondary">{subtasksStatus}</Text>
        {task.subtasks.map((subtask) => (
          <Subtask key={subtask.id} isChecked={subtask.isCompleted}>
            {subtask.title}
          </Subtask>
        ))}
      </S.SubtasksWrapper>
      {statusOptions && (
        <S.StatusWrapper>
          <Text variant="secondary">Current Status</Text>
          <Select
            title={task.status || 'Select status'}
            options={statusOptions}
          />
        </S.StatusWrapper>
      )}
    </Modal>
  );
}
