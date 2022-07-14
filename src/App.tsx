import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import mock from 'components/Dropdown/mock';
import navData from 'components/Navigation/mock';
import Heading from 'components/Heading';
import Navigation from 'components/Navigation';
import Subtask from 'components/Subtask';
import Text from 'components/Text';
import TextField from 'components/TextField';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme, { themeDark } from 'styles/theme';
import Navbar from 'components/Navbar';

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
