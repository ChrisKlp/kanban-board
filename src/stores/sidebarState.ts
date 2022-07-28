import create from 'zustand';
import { devtools } from 'zustand/middleware';

type TSidebarState = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const useSidebarState = create<TSidebarState>()(
  devtools((set) => ({
    isOpen: true,

    toggleSidebar: () => set((s) => ({ isOpen: !s.isOpen })),
  }))
);

export default useSidebarState;
