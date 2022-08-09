/* eslint-disable no-param-reassign */
import create from 'zustand';
import data from 'data.json';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { TBoard, TTask } from 'models';

function getActiveBoardIndex(boards: TBoard[], activeBoardId: string) {
  return boards.findIndex((board) => board.id === activeBoardId);
}

function getTaskStructureData(
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

type TBoardState = {
  activeBoard: string;
  boards: TBoard[];
  setActiveBoard: (id: string) => void;
  createBoard: (board: TBoard) => void;
  editBoard: (board: TBoard) => void;
  deleteBoard: (id: string) => void;
  createTask: (task: TTask) => void;
  editTask: (newTask: TTask) => void;
  getActiveBoard: () => TBoard | undefined;
};

const useBoardState = create<TBoardState>()(
  devtools(
    immer((set, get) => ({
      activeBoard: data.boards[0].id,
      boards: data.boards,

      setActiveBoard: (id: string) => set({ activeBoard: id }),

      getActiveBoard: () =>
        get().boards.find((board) => board.id === get().activeBoard),

      createBoard: (board: TBoard) =>
        set((state) => {
          state.boards.push(board);
        }),

      deleteBoard: (id: string) =>
        set((state) => ({
          boards: state.boards.filter((board) => board.id !== id),
        })),

      editBoard: (board: TBoard) => {},

      createTask: (task: TTask) => {
        const { boards, activeBoard } = get();
        const boardIndex = getActiveBoardIndex(boards, activeBoard);

        const columnIndex = get().boards[boardIndex].columns.findIndex(
          (column) => column.name === task.status
        );
        return set((state) => {
          state.boards[boardIndex].columns[columnIndex].tasks.unshift(task);
        });
      },

      editTask: (newTask: TTask) => {
        const { boards, activeBoard } = get();
        const { boardIndex, columnIndex, taskIndex, column } =
          getTaskStructureData(boards, activeBoard, newTask.id);

        const status = newTask.status || column.name;

        if (column.name === status) {
          return set((state) => {
            state.boards[boardIndex].columns[columnIndex].tasks[taskIndex] =
              newTask;
          });
        }

        set((state) => {
          state.boards[boardIndex].columns[columnIndex].tasks.splice(
            taskIndex,
            1
          );
        });

        return set((state) => {
          state.boards[boardIndex].columns.map((boardColumn) =>
            boardColumn.name === newTask.status
              ? boardColumn.tasks.unshift(newTask)
              : boardColumn
          );
        });
      },

      deleteTask: (id: string) => {
        const { boards, activeBoard } = get();
        const { boardIndex, columnIndex, taskIndex } = getTaskStructureData(
          boards,
          activeBoard,
          id
        );

        return set((state) => {
          state.boards[boardIndex].columns[columnIndex].tasks.splice(
            taskIndex,
            1
          );
        });
      },
    }))
  )
);

export default useBoardState;
