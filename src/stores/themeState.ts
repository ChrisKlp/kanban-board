import create from 'zustand';
import { devtools } from 'zustand/middleware';

type TThemeState = {
  isDarkTheme: boolean;
  setDarkTheme: () => void;
};

const useThemeState = create<TThemeState>()(
  devtools((set) => ({
    isDarkTheme: false,

    setDarkTheme: () => set((s) => ({ isDarkTheme: !s.isDarkTheme })),
  }))
);

export default useThemeState;
