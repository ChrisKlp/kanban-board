import { TBoard, TTask } from 'models';

export type FieldErrors = {
  [key: string]: boolean;
};

export const validateTaskForm = (task: TTask) => {
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

export const validateBoardForm = (board: TBoard) => {
  const errors = {} as FieldErrors;

  if (board.name.length === 0) {
    errors.name = true;
  }

  board.columns.reduce((obj, column) => {
    if (column.name.length === 0) {
      // eslint-disable-next-line no-param-reassign
      obj[column.id] = true;
    }
    return obj;
  }, errors);

  return errors;
};
