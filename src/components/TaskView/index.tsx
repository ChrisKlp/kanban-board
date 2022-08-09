/* eslint-disable react/no-unescaped-entities */
import ContextMenu from 'components/ContextMenu';
import Heading from 'components/Heading';
import Modal from 'components/Modal';
import Select from 'components/Select';
import Subtask from 'components/Subtask';
import Text from 'components/Text';
import { TTask } from 'models';
import useBoardState from 'stores/boardState';
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
  const editTask = useBoardState((s) => s.editTask);
  const deleteTask = useBoardState((s) => s.deleteTask);

  const handleStatusChange = (value: string) => {
    const newTask: TTask = {
      ...task,
      status: value,
    };
    editTask(newTask);
  };

  const handleSubtaskChange = (field: string, value: boolean) => {
    const newTask: TTask = {
      ...task,
      subtasks: task.subtasks.map((subtask) =>
        subtask.id === field ? { ...subtask, isCompleted: value } : subtask
      ),
    };
    editTask(newTask);
  };

  return (
    <Modal closeModal={closeModal}>
      <S.HeaderWrapper>
        <Heading as="h2">{task.title}</Heading>
        <ContextMenu
          variant="task"
          onEditClick={onEditClick}
          onDeleteClick={() => deleteTask(task.id)}
        />
      </S.HeaderWrapper>
      {!!task.description && (
        <Text variant="secondary" size="large">
          {task.description}
        </Text>
      )}
      <S.SubtasksWrapper>
        <Text variant="secondary">{subtasksStatus}</Text>
        {task.subtasks.map((subtask) => (
          <Subtask
            key={subtask.id}
            isChecked={subtask.isCompleted}
            onCheckboxChange={(v) => handleSubtaskChange(subtask.id, v)}
          >
            {subtask.title}
          </Subtask>
        ))}
      </S.SubtasksWrapper>
      {statusOptions && (
        <S.StatusWrapper>
          <Text variant="secondary">Current Status</Text>
          <Select
            title={task.status || statusOptions[0]}
            options={statusOptions}
            onOptionSelect={(v) => handleStatusChange(v)}
          />
        </S.StatusWrapper>
      )}
    </Modal>
  );
}
