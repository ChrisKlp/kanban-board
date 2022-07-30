import create from 'zustand';
import data from 'data.json';
import { devtools } from 'zustand/middleware';
import { TBoard } from 'models';

type TBoardState = {
  activeBoard: string;
  boards: TBoard[];
  setActiveBoard: (id: string) => void;
};

const useBoardState = create<TBoardState>()(
  devtools((set) => ({
    activeBoard: data.boards[0].id,
    boards: data.boards,

    setActiveBoard: (id: string) => set({ activeBoard: id }),
  }))
);

export default useBoardState;
