/* eslint-disable no-param-reassign */
import create from 'zustand';
import data from 'data.json';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { TBoard, TTask } from 'models';
import { v4 as uuidv4 } from 'uuid';

type TBoardState = {
  activeBoard: string;
  boards: TBoard[];
  setActiveBoard: (id: string) => void;
  createBoard: (name: string) => void;
  deleteBoard: (id: string) => void;
  createTask: (task: TTask) => void;
  editTask: (newTask: TTask) => void;
};

const useBoardState = create<TBoardState>()(
  devtools(
    immer((set, get) => ({
      activeBoard: data.boards[0].id,
      boards: data.boards,

      setActiveBoard: (id: string) => set({ activeBoard: id }),

      createBoard: (name: string) =>
        set((state) => {
          state.boards.push({
            id: uuidv4(),
            name,
            columns: [],
          });
        }),

      deleteBoard: (id: string) =>
        set((state) => ({
          boards: state.boards.filter((board) => board.id !== id),
        })),

      createTask: (task: TTask) => {
        const boardIndex = get().boards.findIndex(
          (board) => board.id === get().activeBoard
        );
        const columnIndex = get().boards[boardIndex].columns.findIndex(
          (column) => column.name === task.status
        );
        return set((state) => {
          state.boards[boardIndex].columns[columnIndex].tasks.unshift(task);
        });
      },

      editTask: (newTask: TTask) => {
        const boardIndex = get().boards.findIndex(
          (board) => board.id === get().activeBoard
        );
        const columnIndex = get().boards[boardIndex].columns.findIndex(
          (column) => column.tasks.find((task) => task.id === newTask.id)
        );
        const column = get().boards[boardIndex].columns[columnIndex];

        const taskIndex = column.tasks.findIndex(
          (task) => task.id === newTask.id
        );

        if (column.name === newTask.status) {
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
    }))
  )
);

export default useBoardState;
