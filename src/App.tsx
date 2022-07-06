import Button from 'components/Button';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button>Hello</Button>
    </ThemeProvider>
  );
}

export default App;
