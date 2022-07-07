import Subtask from 'components/Subtask';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Subtask checked>Idle</Subtask>
    </ThemeProvider>
  );
}

export default App;
