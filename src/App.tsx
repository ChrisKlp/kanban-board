import Board from 'components/Board';
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
      <Layout>{board && <Board board={board} />}</Layout>
    </ThemeProvider>
  );
}

export default App;
