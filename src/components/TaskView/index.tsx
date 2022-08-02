/* eslint-disable react/no-unescaped-entities */
import ContextMenu from 'components/ContextMenu';
import Heading from 'components/Heading';
import Modal from 'components/Modal';
import Subtask from 'components/Subtask';
import { TTask } from 'models';
import * as S from './style';

type TaskViewProps = {
  task: TTask;
  statusOptions: string[];
  subtasksStatus: string;
  closeModal: () => void;
};

function TaskView({
  task,
  statusOptions,
  subtasksStatus,
  closeModal,
}: TaskViewProps) {
  return (
    <Modal closeModal={closeModal}>
      <S.HeaderWrapper>
        <Heading as="h2">{task.title}</Heading>
        <ContextMenu variant="task" />
      </S.HeaderWrapper>
      {!!task.description && <S.Description>{task.description}</S.Description>}
      <S.Label>{subtasksStatus}</S.Label>
      <S.SubtasksWrapper>
        {task.subtasks.map((subtask) => (
          <Subtask key={subtask.id} isChecked={subtask.isCompleted}>
            {subtask.title}
          </Subtask>
        ))}
      </S.SubtasksWrapper>
      <S.Label>Current Status</S.Label>
      <S.StatusSelect
        title={task.status || 'Select status'}
        options={statusOptions}
      />
    </Modal>
  );
}

export default TaskView;
