import Board from 'components/Board';
import Layout from 'components/Layout';
import useBoardState from 'stores/boardState';
import useThemeState from 'stores/themeState';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import themeLight, { themeDark } from 'styles/theme';

function App() {
  const isDarkTheme = useThemeState((s) => s.isDarkTheme);
  const activeBoard = useBoardState((state) => state.activeBoard);
  const boards = useBoardState((state) => state.boards);

  const activeBoardData = boards.find((board) => board.id === activeBoard);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyles />
      <Layout>{activeBoardData && <Board board={activeBoardData} />}</Layout>
    </ThemeProvider>
  );
}

export default App;
