/* eslint-disable no-param-reassign */
import data from 'data.json';
import { TBoard, TTask } from 'models';
import { getActiveBoardIndex, getTaskStructureData } from 'utils/store-utils';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TBoardState = {
  activeBoard: string;
  boards: TBoard[];
  setActiveBoard: (id: string) => void;
  createBoard: (board: TBoard) => void;
  editBoard: (board: TBoard) => void;
  deleteBoard: () => void;
  createTask: (task: TTask) => void;
  editTask: (newTask: TTask) => void;
  deleteTask: (id: string) => void;
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

      createBoard: (board: TBoard) => {
        set((state) => {
          state.boards.push(board);
        });

        return get().setActiveBoard(board.id);
      },

      deleteBoard: () => {
        set((state) => ({
          boards: state.boards.filter(
            (board) => board.id !== state.activeBoard
          ),
        }));

        const isEmptyBoards = get().boards.length === 0;
        const activeBoard = !isEmptyBoards ? get().boards[0].id : '';

        return get().setActiveBoard(activeBoard);
      },

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
