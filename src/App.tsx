import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer } from 'react-toastify';

import {
  Small,
  Icon,
  Layout,
  Header,
  Footer,
  Logo,
  ScreenReader,
  SearchForm,
  Section,
  CardPortrait,
} from './components';
import { theme } from './theme';
import GlobalStyle from './globalStyle';

function App() {
  console.log('secret', process.env.REACT_APP_MY_ENV_VARIABLE);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header>
          <a href="http://localhost:3000/">
            <ScreenReader>Click to refresh page</ScreenReader>
            <Logo />
          </a>
        </Header>
        <main style={{ gridColumn: '2/11' }}>
          <Section>
            <SearchForm />
          </Section>
          <Section>
            <CardPortrait />
          </Section>
          <section style={{ margin: 'auto 0' }}>
            <Icon icon="search" title="search" />
            <Icon icon="wind" size="2x" />
            <Icon icon="umbrella" size="3x" />
          </section>
        </main>
        <Footer>
          <Small>&#169; jnch {new Date().getFullYear()}</Small>
        </Footer>
      </Layout>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
library.add(fas);
