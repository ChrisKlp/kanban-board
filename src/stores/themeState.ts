import create from 'zustand';
import { devtools } from 'zustand/middleware';

type TThemeState = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const useThemeState = create<TThemeState>()(
  devtools((set) => ({
    isDarkTheme: false,

    toggleTheme: () => set((s) => ({ isDarkTheme: !s.isDarkTheme })),
  }))
);

export default useThemeState;
