import Board from 'components/Board';
import EmptyBoard from 'components/EmptyBoard';
import Layout from 'components/Layout';
import useBoardState from 'stores/boardState';
import useThemeState from 'stores/themeState';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import themeLight, { themeDark } from 'styles/theme';

function App() {
  const isDarkTheme = useThemeState((s) => s.isDarkTheme);
  const { getActiveBoard } = useBoardState();
  const board = getActiveBoard();

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyles />
      <Layout>
        {board && board.columns.length > 0 ? (
          <Board board={board} />
        ) : (
          <EmptyBoard />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
