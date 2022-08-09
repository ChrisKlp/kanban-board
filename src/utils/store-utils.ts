import { TBoard } from 'models';

export function getActiveBoardIndex(boards: TBoard[], activeBoardId: string) {
  return boards.findIndex((board) => board.id === activeBoardId);
}

export function getTaskStructureData(
  boards: TBoard[],
  activeBoardId: string,
  taskId: string
) {
  const boardIndex = getActiveBoardIndex(boards, activeBoardId);

  const board = boards[boardIndex];

  const columnIndex = board.columns.findIndex((column) =>
    column.tasks.find((task) => task.id === taskId)
  );

  const column = board.columns[columnIndex];

  const taskIndex = column.tasks.findIndex((task) => task.id === taskId);

  const task = column.tasks[taskIndex];

  return {
    boardIndex,
    board,
    columnIndex,
    column,
    taskIndex,
    task,
  };
}
