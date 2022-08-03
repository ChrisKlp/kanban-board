import Button from 'components/Button';
import Heading from 'components/Heading';
import Modal from 'components/Modal';
import Select from 'components/Select';
import Text from 'components/Text';
import TextField from 'components/TextField';
import iconCross from 'assets/icon-cross.svg';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useBoardState from 'stores/boardState';
import { TTask } from 'models';
import * as S from './style';

const initialValues = {
  title: '',
  description: '',
  status: '',
  subtasks: [
    {
      id: uuidv4(),
      title: '',
      isCompleted: false,
    },
  ],
};

type TaskFormProps = {
  task?: TTask;
  title: string;
  closeModal?: () => void;
};

function TaskForm({ title, task, closeModal }: TaskFormProps) {
  const [values, setValues] = useState(task || initialValues);
  const activeBoard = useBoardState((state) =>
    state.boards.find((board) => board.id === state.activeBoard)
  );
  const statusOptions = activeBoard?.columns.map((column) => column.name);

  const handleChange = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleAddSubtask = () => {
    setValues((s) => ({
      ...s,
      subtasks: [
        ...s.subtasks,
        {
          id: uuidv4(),
          title: '',
          isCompleted: false,
        },
      ],
    }));
  };

  const handleSubtaskChange = (id: string, value: string) => {
    setValues((s) => ({
      ...s,
      subtasks: s.subtasks.map((subtask) =>
        subtask.id === id ? { ...subtask, title: value } : subtask
      ),
    }));
  };

  const handleDeleteSubtask = (id: string) => {
    setValues((s) => ({
      ...s,
      subtasks: s.subtasks.filter((subtask) => subtask.id !== id),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <Modal closeModal={closeModal}>
      <Heading as="h2">{title}</Heading>
      <S.Form onSubmit={handleSubmit}>
        <S.Group>
          <Text as="label" variant="secondary">
            Title
          </Text>
          <TextField
            name="title"
            onInputChange={(v) => handleChange('title', v)}
            placeholder="e.g. Take coffee break"
          />
        </S.Group>
        <S.Group>
          <Text as="label" variant="secondary">
            Description
          </Text>
          <TextField
            name="description"
            onInputChange={(v) => handleChange('description', v)}
            textarea
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
          />
        </S.Group>
        <S.Group>
          <Text as="label" variant="secondary">
            Subtasks
          </Text>
          <S.SubtasksGroup>
            {values.subtasks.map(({ id }) => (
              <S.SubtaskFieldGroup key={id}>
                <TextField
                  name={id}
                  onInputChange={(v) => handleSubtaskChange(id, v)}
                  placeholder="e.g. Make coffee"
                />
                <S.DeleteButton
                  type="button"
                  onClick={() => handleDeleteSubtask(id)}
                >
                  <img src={iconCross} alt="delete icon" />
                </S.DeleteButton>
              </S.SubtaskFieldGroup>
            ))}
            <Button
              type="button"
              variant="secondary"
              onClick={handleAddSubtask}
            >
              + Add New Subtask
            </Button>
          </S.SubtasksGroup>
        </S.Group>
        {statusOptions && (
          <S.Group>
            <Text as="label" variant="secondary">
              Status
            </Text>
            <Select
              title={task?.status || 'Select status'}
              options={statusOptions}
              onOptionSelect={(v) => handleChange('status', v)}
            />
          </S.Group>
        )}
        <Button type="submit">{task ? 'Save Changes' : 'Create Task'}</Button>
      </S.Form>
    </Modal>
  );
}

export default TaskForm;
