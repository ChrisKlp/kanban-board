import iconCross from 'assets/icon-cross.svg';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Modal from 'components/Modal';
import Select from 'components/Select';
import Text from 'components/Text';
import TextField from 'components/TextField';
import { TTask } from 'models';
import { useState } from 'react';
import useBoardState from 'stores/boardState';
import { FieldErrors, validateTaskForm } from 'utils/validation';
import { v4 as uuidv4 } from 'uuid';
import { ReactSVG } from 'react-svg';
import * as S from './style';

type TaskFormProps = {
  task?: TTask;
  title: string;
  statusOptions?: string[];
  closeModal: () => void;
  toggleModals?: () => void;
};

function TaskForm({
  title,
  task,
  statusOptions,
  closeModal,
  toggleModals,
}: TaskFormProps) {
  const [values, setValues] = useState(
    task || {
      id: uuidv4(),
      title: '',
      description: '',
      status: statusOptions ? statusOptions[0] : '',
      subtasks: [
        {
          id: uuidv4(),
          title: '',
          isCompleted: false,
        },
      ],
    }
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const editTask = useBoardState((s) => s.editTask);
  const createTask = useBoardState((s) => s.createTask);

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

    const fieldErrors = validateTaskForm(values);

    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }

    if (task) {
      editTask(values);
    } else {
      createTask(values);
    }

    if (toggleModals) {
      toggleModals();
    } else {
      closeModal();
    }
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
            error={errors.title}
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
                  error={errors[id]}
                  onInputChange={(v) => handleSubtaskChange(id, v)}
                  placeholder="e.g. Make coffee"
                />
                <S.DeleteButton
                  type="button"
                  onClick={() => handleDeleteSubtask(id)}
                >
                  <ReactSVG src={iconCross} />
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
              title={values.status || statusOptions[0]}
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
