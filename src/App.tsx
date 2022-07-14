import Navbar from 'components/Navbar';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {/* <Navigation data={navData} /> */}
    </ThemeProvider>
  );
}

export default App;
