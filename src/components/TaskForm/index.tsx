import iconCross from 'assets/icon-cross.svg';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Modal from 'components/Modal';
import Select from 'components/Select';
import Text from 'components/Text';
import TextField from 'components/TextField';
import { TTask } from 'models';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

const initialValues: TTask = {
  id: uuidv4(),
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
  statusOptions?: string[];
  closeModal: () => void;
  close2ndModal: () => void;
};

function TaskForm({
  title,
  task,
  statusOptions,
  closeModal,
  close2ndModal,
}: TaskFormProps) {
  const [values, setValues] = useState(task || initialValues);

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
    close2ndModal();
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
            initialValue={values.title}
            onInputChange={(v) => handleChange('title', v)}
            placeholder="e.g. Take coffee break"
          />
        </S.Group>
        <S.Group>
          <Text as="label" variant="secondary">
            Description
          </Text>
          <TextField
            textarea
            name="description"
            initialValue={values.description}
            onInputChange={(v) => handleChange('description', v)}
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
          />
        </S.Group>
        <S.Group>
          <Text as="label" variant="secondary">
            Subtasks
          </Text>
          <S.SubtasksGroup>
            {values.subtasks.map(({ id, title: subtaskTitle }) => (
              <S.SubtaskFieldGroup key={id}>
                <TextField
                  name={id}
                  initialValue={subtaskTitle}
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
              title={values.status || 'Select status'}
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
