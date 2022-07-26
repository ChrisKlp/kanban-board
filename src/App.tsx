import Heading from 'components/Heading';
import Layout from 'components/Layout';
import useThemeState from 'stores/themeState';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import themeLight, { themeDark } from 'styles/theme';

function App() {
  const isDarkTheme = useThemeState((s) => s.isDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyles />
      <Layout>
        <Heading size="xlarge">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quas accusamus assumenda similique unde cupiditate velit quidem quod
          quo dolorem, dignissimos voluptatem aut accusantium numquam vel illo
          maiores, eum expedita. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis quas accusamus assumenda similique unde
          cupiditate velit quidem quod quo dolorem, dignissimos voluptatem aut
          accusantium numquam vel illo maiores, eum expedita. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Perferendis quas accusamus
          assumenda similique unde cupiditate velit quidem quod quo dolorem,
          dignissimos voluptatem aut accusantium numquam vel illo maiores, eum
          expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis quas accusamus assumenda similique unde cupiditate velit
          quidem quod quo dolorem, dignissimos voluptatem aut accusantium
          numquam vel illo maiores, eum expedita.sit amet consectetur
          adipisicing elit. Perferendis quas accusamus assumenda similique unde
          cupiditate velit quidem quod quo dolorem, dignissimos voluptatem aut
          accusantium numquam vel illo maiores, eum expedita. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Perferendis quas accusamus
          assumenda similique unde cupiditate velit quidem quod quo dolorem,
          dignissimos voluptatem aut accusantium numquam vel illo maiores, eum
          expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis quas accusamus assumenda similique unde cupiditate velit
          quidem quod quo dolorem, dignissimos voluptatem aut accusantium
          numquam vel illo maiores, eum expedita.sit amet consectetur
          adipisicing elit. Perferendis quas accusamus assumenda similique unde
          cupiditate velit quidem quod quo dolorem, dignissimos voluptatem aut
          accusantium numquam vel illo maiores, eum expedita. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Perferendis quas accusamus
          assumenda similique unde cupiditate velit quidem quod quo dolorem,
          dignissimos voluptatem aut accusantium numquam vel illo maiores, eum
          expedita.
        </Heading>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
