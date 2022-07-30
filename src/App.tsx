import Board from 'components/Board';
import Layout from 'components/Layout';
import useThemeState from 'stores/themeState';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import themeLight, { themeDark } from 'styles/theme';
import data from 'data.json';

function App() {
  const isDarkTheme = useThemeState((s) => s.isDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyles />
      <Layout>
        <Board board={data.boards[0]} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
