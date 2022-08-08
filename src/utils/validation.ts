import { TTask } from 'models';

export type FieldErrors = {
  [key: string]: boolean;
};

export const validateForm = (task: TTask) => {
  const errors = {} as FieldErrors;

  if (task.title.length === 0) {
    errors.title = true;
  }

  task.subtasks.reduce((obj, subtask) => {
    if (subtask.title.length === 0) {
      // eslint-disable-next-line no-param-reassign
      obj[subtask.id] = true;
    }
    return obj;
  }, errors);

  return errors;
};
